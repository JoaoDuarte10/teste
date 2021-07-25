import { Request, Response } from 'express'
import { ReceitaModel } from '../models/ReceitaDB'

class NewReceita {
    async handle(req: Request, res: Response) {

        const receita = new ReceitaModel({
            title: req.body.title,
            description: req.body.description,
            ingredientes: req.body.ingredientes,
            tempoDePreparo: req.body.tempoDePreparo,
            modoDePreparo: req.body.modoDePreparo
        });

        await receita.save();

        res.json(receita)
    }
}

export { NewReceita }