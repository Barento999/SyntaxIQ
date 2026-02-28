import express from "express";
import {
  createReview,
  getReview,
  getUserReviews,
} from "../controllers/reviewController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, createReview);
router.get("/user", protect, getUserReviews);
router.get("/:id", protect, getReview);

export default router;
