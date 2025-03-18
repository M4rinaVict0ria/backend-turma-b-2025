import express from "express";
const router = express.Router();

import UserController from "../controllers/users.controller.js";
router.post("/user", UserController.createUser);

export default router;