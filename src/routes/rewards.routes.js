import express from "express";
import RewardController from "../controllers/rewards.controller.js";

const router = express.Router();

router.post("/rewards", RewardController.create);
router.get("/rewards", RewardController.getAll);

export default router;
