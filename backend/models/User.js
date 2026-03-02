import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  preferences: {
    emailNotifications: {
      type: Boolean,
      default: true,
    },
    autoSaveCode: {
      type: Boolean,
      default: false,
    },
    darkMode: {
      type: Boolean,
      default: true,
    },
  },
  subscription: {
    plan: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },
    status: {
      type: String,
      enum: ["active", "cancelled", "expired"],
      default: "active",
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      default: null,
    },
    stripeCustomerId: {
      type: String,
      default: null,
    },
    stripeSubscriptionId: {
      type: String,
      default: null,
    },
  },
  usage: {
    reviewsThisMonth: {
      type: Number,
      default: 0,
    },
    lastResetDate: {
      type: Date,
      default: Date.now,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Check if user can create a review based on their plan
userSchema.methods.canCreateReview = function () {
  const limits = {
    free: 10,
    pro: 100,
    enterprise: -1, // unlimited
  };

  const limit = limits[this.subscription.plan];

  // Unlimited for enterprise
  if (limit === -1) return true;

  // Check if we need to reset monthly counter
  const now = new Date();
  const lastReset = new Date(this.usage.lastResetDate);
  const monthsSinceReset =
    (now.getFullYear() - lastReset.getFullYear()) * 12 +
    (now.getMonth() - lastReset.getMonth());

  if (monthsSinceReset >= 1) {
    this.usage.reviewsThisMonth = 0;
    this.usage.lastResetDate = now;
  }

  return this.usage.reviewsThisMonth < limit;
};

// Increment review count
userSchema.methods.incrementReviewCount = async function () {
  this.usage.reviewsThisMonth += 1;
  this.usage.totalReviews += 1;
  await this.save();
};

// Get usage stats
userSchema.methods.getUsageStats = function () {
  const limits = {
    free: 10,
    pro: 100,
    enterprise: -1,
  };

  const limit = limits[this.subscription.plan];

  return {
    reviewsThisMonth: this.usage.reviewsThisMonth,
    limit: limit === -1 ? "Unlimited" : limit,
    remaining: limit === -1 ? "Unlimited" : limit - this.usage.reviewsThisMonth,
    totalReviews: this.usage.totalReviews,
    resetDate: new Date(
      this.usage.lastResetDate.getFullYear(),
      this.usage.lastResetDate.getMonth() + 1,
      1,
    ),
  };
};

export default mongoose.model("User", userSchema);
