import express from "express";
import FollowerController from "../controllers/followers.controller.js";

const router = express.Router();

router.post("/followers", FollowerController.create);
router.get("/followers", FollowerController.getAll);

export default router;
