import { z } from "zod";

const PracticeSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  xp_reward: z.number().int().min(1)
});

const practices = [];

let currentId = 1;  // Começando o contador

const PracticeController = {
  create(req, res) {
    try {
      const data = PracticeSchema.parse(req.body);
      const newPractice = { id: currentId++, ...data };  // Incrementa o contador
      practices.push(newPractice);
      res.status(201).json({ message: "Prática criada", practice: newPractice });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },

  getAll(req, res) {
    res.json(practices);
  }
};

export default PracticeController;