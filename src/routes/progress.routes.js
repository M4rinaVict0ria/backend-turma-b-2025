import express from 'express';
const router = express.Router();

import ProgressController from '../controllers/progress.controller.js';

router.post("/progress", ProgressController.createProgress);
router.get("/progress/:userId", ProgressController.getUserProgress);

export default router;
