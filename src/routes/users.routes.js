import express from "express";
const router = express.Router();

import UserController from "../controllers/users.controller.js";

// Criar usuário
router.post("/user", UserController.createUser);

// Listar todos os usuários (opcional, útil pra testes)
router.get("/users", UserController.getAllUsers);

export default router;
