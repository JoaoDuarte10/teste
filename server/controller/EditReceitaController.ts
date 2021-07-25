import { Request, Response } from 'express'
import { ReceitaModel } from '../models/ReceitaDB'

class EditReceitaController {
    async handle(req: Request, res: Response) {
    
    const id = req.header('id');

    if(!id || id === "") return res.status(400).json({erro: "Id incorrect"})

        const novosDados = { title: req.body.title,
                            description: req.body.description,
                            ingredientes: req.body.ingredientes,
                            tempoPreparo: req.body.tempoPreparo,
                            modoDePreparo: req.body.modoDePreparo };
    

        try {
            const updateReceita = await ReceitaModel.findByIdAndUpdate(
                { _id: id }, novosDados, { new: true }
            );
            res.json(updateReceita);

        } catch (error) {
            res.status(400).json({error})
        }

        
    }
}

export { EditReceitaController }