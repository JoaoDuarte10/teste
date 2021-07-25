import  { Request, Response }  from 'express';
import { receita1 } from '../models/receita1';

class Receita1Controller {
    handle(req: Request, res: Response) {
        res.json(receita1)
    }
}

export { Receita1Controller }