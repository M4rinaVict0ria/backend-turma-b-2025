import express from "express";
import AchievementController from "../controllers/achievements.controller.js";

const router = express.Router();

router.post("/achievements", AchievementController.create);
router.get("/achievements", AchievementController.getAll);

export default router;
