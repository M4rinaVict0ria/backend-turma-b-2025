import { z } from "zod";

const PurchaseSchema = z.object({
  user_id: z.number(),
  item_id: z.number(),
  purchased_at: z.string().datetime()
});

const purchases = [];

const PurchaseController = {
  create(req, res) {
    try {
      const data = PurchaseSchema.parse(req.body);
      const newPurchase = { id: Date.now(), ...data };
      purchases.push(newPurchase);
      res.status(201).json({ message: "Item comprado", purchase: newPurchase });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },
  getAll(req, res) {
    res.json(purchases);
  }
};

export default PurchaseController;
