import  { Request, Response }  from 'express';
import { receita5 } from '../models/receita5'

class Receita5Controller {
    handle(req: Request, res: Response) {
        res.json(receita5)
    }
}

export { Receita5Controller }