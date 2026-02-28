import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  code: {
    type: String,
    required: [true, "Code is required"],
    maxlength: [10000, "Code cannot exceed 10000 characters"],
  },
  language: {
    type: String,
    required: [true, "Programming language is required"],
    enum: [
      "javascript",
      "python",
      "java",
      "cpp",
      "csharp",
      "go",
      "rust",
      "typescript",
      "php",
      "ruby",
      "swift",
      "kotlin",
      "other",
    ],
  },
  aiResponse: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

reviewSchema.index({ userId: 1, createdAt: -1 });

export default mongoose.model("Review", reviewSchema);
