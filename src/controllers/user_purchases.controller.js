import { z } from "zod";

const PurchaseSchema = z.object({
  user_id: z.number(),
  item_id: z.number(),
  purchased_at: z.string().datetime()
});

const purchases = [];
let nextPurchaseId = 1;

const PurchaseController = {
  create(req, res) {
    try {
      const data = PurchaseSchema.parse(req.body);
      const newPurchase = {
        id: nextPurchaseId++,
        ...data,
        purchased_at: new Date().toISOString() // Gera a data atual automaticamente
      };
      purchases.push(newPurchase);
      res.status(201).json({ message: "Compra registrada", purchase: newPurchase });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },

  getAll(req, res) {
    res.json(purchases);
  }
};

export default PurchaseController;
