import { Request, Response } from 'express'
import { ReceitaModel } from '../models/ReceitaDB'

class EditReceitaController {
    async handle(req: Request, res: Response) {
        const novosDados = { title: req.body.title,
                            description: req.body.description,
                            ingredientes: req.body.ingredientes,
                            tempoPreparo: req.body.tempoPreparo,
                            modoDePreparo: req.body.modoDePreparo };
        
        const updateReceita = await ReceitaModel.findByIdAndUpdate(
            { _id: req.body.id }, novosDados, { new: true }
        );

        res.json(updateReceita);
    }
}

export { EditReceitaController }