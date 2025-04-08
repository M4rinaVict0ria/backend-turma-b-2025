import { z } from "zod";

const StoreItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  cost: z.number()
});

const storeItems = [];
let nextItemId = 1; // Inicia o contador do ID

const StoreController = {
  create(req, res) {
    try {
      const data = StoreItemSchema.parse(req.body);
      const newItem = { id: nextItemId++, ...data }; // Usando o contador sequencial para o ID
      storeItems.push(newItem);
      res.status(201).json({ message: "Item da loja criado", item: newItem });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },
  getAll(req, res) {
    res.json(storeItems);
  }
};

export default StoreController;