import { Request, Response } from 'express'
import { ReceitaModel } from '../models/ReceitaDB'

class DeleteReceitaController {
    async handle(req: Request, res: Response) {
        const  id  = req.body.id;
        if(id === "") return res.status(400).json({erro: "Id nulo, preencha corretamente!"})
        
        const deleteReceita = await ReceitaModel.findOneAndDelete({_id: id})
        if(!deleteReceita) return res.status(400).json({error:"Id invalid"})

        res.json({message: "Receita deletada com sucesso"})
    }
}

export { DeleteReceitaController }