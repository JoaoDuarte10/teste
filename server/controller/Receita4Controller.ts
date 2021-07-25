import  { Request, Response }  from 'express';
import { receita4 } from '../models/receita4'

class Receita4Controller {
    handle(req: Request, res: Response) {
        res.json(receita4)
    }
}

export { Receita4Controller }