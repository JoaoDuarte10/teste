import  { Request, Response }  from 'express';
import { receita2 } from '../models/receita2'

class Receita2Controller {
    handle(req: Request, res: Response) {
        res.json(receita2)
    }
}

export { Receita2Controller }