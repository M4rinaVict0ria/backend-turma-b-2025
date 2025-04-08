import { z } from "zod";

const InsigniaSchema = z.object({
  user_id: z.number(),
  name: z.string(),
  description: z.string(),
  unlocked_at: z.string().datetime()
});

const insignias = [];
let nextId = 1;

const InsigniaController = {
  create(req, res) {
    try {
      const data = InsigniaSchema.parse(req.body);
      const newInsignia = { id: nextId++, ...data };
      insignias.push(newInsignia);
      res.status(201).json({ message: "Insígnia desbloqueada", insignia: newInsignia });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },
  getAll(req, res) {
    res.json(insignias);
  }
};

export default InsigniaController;
