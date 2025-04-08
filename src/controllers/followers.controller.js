import { z } from "zod";

const FollowerSchema = z.object({
  following_user_id: z.number(),
  followed_user_id: z.number()
});

const followers = [];
let currentId = 1; // Inicializa o contador de IDs

const FollowerController = {
  create(req, res) {
    try {
      const data = FollowerSchema.parse(req.body);
      const newFollow = { id: currentId++, ...data }; // Incrementa o contador
      followers.push(newFollow);
      res.status(201).json({ message: "Seguindo usuário", follow: newFollow });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },
  getAll(req, res) {
    res.json(followers);
  }
};

export default FollowerController;
