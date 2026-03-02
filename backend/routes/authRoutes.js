import express from "express";
import {
  register,
  login,
  updateProfile,
  updatePassword,
  getProfile,
  updatePreferences,
  getPreferences,
  getSubscription,
  updateSubscription,
  cancelSubscription,
  getUsageStats,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.put("/password", protect, updatePassword);
router.get("/preferences", protect, getPreferences);
router.put("/preferences", protect, updatePreferences);
router.get("/subscription", protect, getSubscription);
router.put("/subscription", protect, updateSubscription);
router.delete("/subscription", protect, cancelSubscription);
router.get("/usage", protect, getUsageStats);

export default router;
