import { Request, Response } from 'express'
import { ReceitaModel } from '../models/ReceitaDB'

class DeleteReceitaController {
    async handle(req: Request, res: Response) {
        const  id  = req.body.id;
        
        const deleteReceita = await ReceitaModel.findOneAndDelete({_id: id})

        res.json(deleteReceita)
    }
}

export { DeleteReceitaController }