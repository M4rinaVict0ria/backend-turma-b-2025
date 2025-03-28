import { z } from "zod";

const PaymentSchema = z.object({
    data: z.string().datetime({message: 'Data invalida'}),
    recibo: z.number({message: 'Recibo Invalido'}).min(0,{message: 'Recibo Invalido'}),
    valor: z.number({message: 'Valor Invalido'}).min(0,{message: 'Valor Invalido'}),
    observacao: z.string().optional(),
});

const PaymentController = {
    
    async createPayment(req, res) {
        try {
            const { data, recibo, valor, observacao} = req.body;
            PaymentSchema.parse({data, recibo, valor, observacao});
            return res.status(201).json({message: 'Payment created', data: {data, recibo, valor, observacao}});
        } catch (error) {
            if (error instanceof z.ZodError){
                return res.status (400).json({message: "Validation error", details: error.errors}); 
            }

            return res.status(500).json({error: 'Internal server error'});
        }
    },

    async updatePayment(req, res) {
        const { id } = req.params;
        try {
            const { data, recibo, valor, observacao} = req.body;
            PaymentSchema.parse({data, recibo, valor, observacao});
            return res.status(200).json({message: 'Payment updated', 
                                        data: {data, recibo, valor, observacao}});
                                        
        } catch (error) {
            if (error instanceof z.ZodError){
                return res.status(400).json({message: "Validation error", details: error.errors});
            }
            return res.status(500).json({error: 'Internal server error'});
        }
    },

    async deletePayment(req, res) {
        try {
        const { id } = req.params;
        return res.status(200).json({message: 'Payment deleted', id});
        } catch (error) {
            return res.status(500).json({error: 'Internal server error'});
        }
    },

};

export default PaymentController;