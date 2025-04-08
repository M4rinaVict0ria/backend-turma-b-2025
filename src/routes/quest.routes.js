import express from "express";
import QuestController from "../controllers/quest.controller.js";

const router = express.Router();

router.post("/quest", QuestController.create);
router.get("/quest", QuestController.getAll);

export default router;