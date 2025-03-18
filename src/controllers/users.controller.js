import {z} from "zod";

const UserSchema = z.object({
	nome: z.string({message: 'Nome Invalido'}).min(6,{message: 'Nome Invalido'}),
	email: z.string().email({ message: 'Email Invalido' }),
	senha: z.string({message: 'Senha Invalido'}).min(8,{message: 'Senha Invalido'}),
});

const UserController = {
	async createUser(req, res) {
		try {
			const {nome, email, senha}= req.body;
			UserScheme.parse({nome, email, senha});
			return res.status(201).json({message: 'User Created', nome:{nome, email, senha}});
			} catch (error) {
				if (error instanceof z.ZodError){
					return res.status(400).json({message: "Validation error", details:error});
				}

				return res.status(500).json({error:'internal server error'});
			}
		}
	};

export default UserController