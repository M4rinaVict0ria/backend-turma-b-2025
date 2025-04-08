import express from "express";
import PracticeController from "../controllers/practices.controller.js";

const router = express.Router();

router.post("/practices", PracticeController.create);
router.get("/practices", PracticeController.getAll);

export default router;