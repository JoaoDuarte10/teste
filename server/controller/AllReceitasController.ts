import { Request, Response } from 'express'
import { receitas } from '../models/receitas'

class AllReceitas {
    handle(req: Request, res: Response) {
        res.json(receitas)
    }
}

export { AllReceitas }