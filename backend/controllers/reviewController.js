import Review from "../models/Review.js";
import User from "../models/User.js";
import { analyzeCode } from "../services/geminiService.js";

export const createReview = async (req, res, next) => {
  try {
    const { code, language } = req.body;

    if (!code || !language) {
      res.status(400);
      throw new Error("Please provide code and language");
    }

    // Check usage limits
    const user = await User.findById(req.user._id);
    if (!user.canCreateReview()) {
      const stats = user.getUsageStats();
      res.status(403);
      throw new Error(
        `Monthly review limit reached (${stats.reviewsThisMonth}/${stats.limit}). Upgrade your plan or wait until ${stats.resetDate.toLocaleDateString()}.`,
      );
    }

    if (code.length > parseInt(process.env.MAX_CODE_LENGTH || 10000)) {
      res.status(400);
      throw new Error(
        `Code exceeds maximum length of ${process.env.MAX_CODE_LENGTH} characters`,
      );
    }

    // Sanitize input - basic XSS prevention
    const sanitizedCode = code.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      "",
    );

    // Call Gemini AI
    const aiResponse = await analyzeCode(sanitizedCode, language);

    // Save review
    const review = await Review.create({
      userId: req.user._id,
      code: sanitizedCode,
      language,
      aiResponse,
    });

    // Increment usage counter
    await user.incrementReviewCount();

    res.status(201).json({
      success: true,
      data: review,
      usage: user.getUsageStats(),
    });
  } catch (error) {
    next(error);
  }
};

export const getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      res.status(404);
      throw new Error("Review not found");
    }

    // Check ownership
    if (review.userId.toString() !== req.user._id.toString()) {
      res.status(403);
      throw new Error("Not authorized to access this review");
    }

    res.json({
      success: true,
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserReviews = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const reviews = await Review.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .select("-code");

    const total = await Review.countDocuments({ userId: req.user._id });

    res.json({
      success: true,
      data: reviews,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};
