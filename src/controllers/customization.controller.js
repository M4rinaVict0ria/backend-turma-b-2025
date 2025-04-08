import { z } from "zod";

const CustomizationSchema = z.object({
  name: z.string(),
  type: z.enum(["banner", "frame"]), // tipo de personalização
  cost: z.number()
});

const customizations = [];
let nextId = 1;

const CustomizationController = {
  create(req, res) {
    try {
      const data = CustomizationSchema.parse(req.body);
      const newItem = { id: nextId++, ...data };
      customizations.push(newItem);
      res.status(201).json({ message: "Item criado", customization: newItem });
    } catch (error) {
      res.status(400).json({ error: error.errors });
    }
  },
  getAll(req, res) {
    res.json(customizations);
  }
};

export default CustomizationController;
