import { z } from "zod";

const UserQuestSchema = z.object({
  user_id: z.number(),
  quest_id: z.number(),
  progress: z.number(),
  completed_at: z.string().datetime()
});

const userQuests = [];

const UserQuestController = {
  create(req, res) {
    try {
      const data = UserQuestSchema.parse(req.body);
      const newUserQuest = { id: Date.now(), ...data };
      userQuests.push(newUserQuest);
      res.status(201).json({ message: "Progresso em missão salvo", userQuest: newUserQuest });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },
  getAll(req, res) {
    res.json(userQuests);
  }
};

export default UserQuestController;