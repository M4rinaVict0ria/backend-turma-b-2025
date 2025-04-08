import express from "express";
import InsigniaController from "../controllers/insignias.controller.js";

const router = express.Router();

router.post("/insignias", InsigniaController.create);
router.get("/insignias", InsigniaController.getAll);

export default router;
