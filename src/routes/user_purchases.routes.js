import express from "express";
import PurchaseController from "../controllers/user_purchases.controller.js";

const router = express.Router();

router.post("/user_purchases", PurchaseController.create);
router.get("/user_purchases", PurchaseController.getAll);

export default router;
