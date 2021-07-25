import  { Request, Response }  from 'express';
import { receita3 } from '../models/receita3'

class Receita3Controller {
    handle(req: Request, res: Response) {
        res.json(receita3)
    }
}

export { Receita3Controller }