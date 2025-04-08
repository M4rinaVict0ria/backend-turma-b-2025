import express from "express";
import UserRewardController from "../controllers/user_rewards.controller.js";

const router = express.Router();

router.post("/user_rewards", UserRewardController.create);
router.get("/user_rewards", UserRewardController.getAll);

export default router;
