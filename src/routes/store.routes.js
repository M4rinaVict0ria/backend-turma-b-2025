import express from "express";
import StoreController from "../controllers/store.controller.js";

const router = express.Router();

router.post("/store", StoreController.create);
router.get("/store", StoreController.getAll);

export default router;
