import express from 'express';
import RewardController from '../controllers/rewards.controller.js';  // Certifique-se de importar a controller corretamente

const router = express.Router();

// Definindo as rotas
router.post("/rewards", RewardController.create);  // Rota para criar recompensa
router.get("/rewards", RewardController.getAll);  // Rota para listar recompensas

export default router;
