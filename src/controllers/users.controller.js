import { z } from "zod";

const UserSchema = z.object({
	nome: z.string({ message: 'Nome inválido' }).min(6, { message: 'Nome deve ter no mínimo 6 caracteres' }),
	email: z.string().email({ message: 'Email inválido' }),
	senha: z.string({ message: 'Senha inválida' }).min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
});

const usuarios = [];
let nextUserId = 1; // ID sequencial

const UserController = {
	async createUser(req, res) {
		try {
			const { nome, email, senha } = req.body;

			UserSchema.parse({ nome, email, senha });

			const novoUsuario = {
				id: nextUserId++, // ID incrementa
				nome,
				email,
				senha,
				pontos: 0,
				missoesConcluidas: []
			};

			usuarios.push(novoUsuario);

			return res.status(201).json({
				message: 'Usuário criado com sucesso!',
				user: {
					id: novoUsuario.id,
					nome: novoUsuario.nome,
					email: novoUsuario.email
				}
			});
		} catch (error) {
			if (error instanceof z.ZodError) {
				return res.status(400).json({
					message: "Erro de validação",
					details: error.errors
				});
			}
			return res.status(500).json({ error: 'Erro interno do servidor' });
		}
	},

	getAllUsers(req, res) {
		return res.status(200).json(usuarios);
	}
};

export default UserController;
