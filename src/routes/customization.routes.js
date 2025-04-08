import express from "express";
import CustomizationController from "../controllers/customization.controller.js";

const router = express.Router();

router.post("/customizations", CustomizationController.create);
router.get("/customizations", CustomizationController.getAll);

export default router;
