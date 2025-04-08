import { z } from "zod";

const ProgressSchema = z.object({
  userId: z.number(),
  missionId: z.number(),
  data: z.string().datetime() // formato ISO
});

const progressos = [];
let nextProgressId = 1; // ID sequencial

const ProgressController = {
  createProgress(req, res) {
    try {
      const progresso = ProgressSchema.parse(req.body);
      const novoProgresso = { id: nextProgressId++, ...progresso };
      progressos.push(novoProgresso);
      return res.status(201).json({ message: "Progresso registrado com sucesso", progresso: novoProgresso });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Erro de validação", details: error.errors });
      }
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  },

  getUserProgress(req, res) {
    const userId = Number(req.params.userId);
    const userProgress = progressos.filter(p => p.userId === userId);
    return res.status(200).json(userProgress);
  }
};

export default ProgressController;
