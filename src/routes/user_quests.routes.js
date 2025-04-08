import express from "express";
import UserQuestController from "../controllers/user_quests.controller.js";

const router = express.Router();

router.post("/user_quests", UserQuestController.create);
router.get("/user_quests", UserQuestController.getAll);

export default router;