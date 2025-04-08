import { z } from "zod";

const AchievementSchema = z.object({
  user_id: z.number(),
  title: z.string(),
  description: z.string(),
  month: z.string()
});

const achievements = [];
let nextId = 1;

const AchievementController = {
  create(req, res) {
    try {
      const data = AchievementSchema.parse(req.body);
      const newAchievement = { id: nextId++, ...data };
      achievements.push(newAchievement);
      res.status(201).json({ message: "Conquista registrada", achievement: newAchievement });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },
  getAll(req, res) {
    res.json(achievements);
  }
};

export default AchievementController;
