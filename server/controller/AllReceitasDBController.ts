import { Request, Response } from 'express'
import { ReceitaModel } from '../models/ReceitaDB'

class AllReceitasDB {
    async handle(req: Request, res: Response) {
        const allReceitas = await ReceitaModel.find();

        res.json(allReceitas)
    }
}

export { AllReceitasDB }