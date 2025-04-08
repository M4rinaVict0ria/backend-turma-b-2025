import { z } from "zod";

const QuestSchema = z.object({
  title: z.string(),
  description: z.string(),
  xp_bonus: z.number(),
  status: z.string()
});

const quests = [];

const QuestController = {
  create(req, res) {
    try {
      const data = QuestSchema.parse(req.body);
      const newQuest = { id: Date.now(), ...data };
      quests.push(newQuest);
      res.status(201).json({ message: "Missão adicionada", quest: newQuest });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },
  getAll(req, res) {
    res.json(quests);
  }
};

export default QuestController;