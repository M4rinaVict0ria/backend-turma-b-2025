import { z } from "zod";

const UserRewardSchema = z.object({
  user_id: z.number(),
  reward_id: z.number(),
  unlocked_at: z.string().datetime()
});

const userRewards = [];

const UserRewardController = {
  create(req, res) {
    try {
      const data = UserRewardSchema.parse(req.body);
      const newReward = { id: Date.now(), ...data };
      userRewards.push(newReward);
      res.status(201).json({ message: "Recompensa desbloqueada", reward: newReward });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },
  getAll(req, res) {
    res.json(userRewards);
  }
};

export default UserRewardController;
