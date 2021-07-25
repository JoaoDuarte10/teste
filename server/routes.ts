import { Router } from "express";

//Receitas que estão no projeto.
import { AllReceitas } from "./controller/AllReceitasController";
import { Receita1Controller } from "./controller/Receita1Controller";
import { Receita2Controller } from "./controller/Receita2Controller";
import { Receita3Controller } from "./controller/Receita3Controller";
import { Receita4Controller } from "./controller/Receita4Controller";
import { Receita5Controller } from "./controller/Receita5Controller";

//Receitas que estão no banco de dados.
import { NewReceita } from "./controller/NewReceitaController";
import { DeleteReceitaController } from "./controller/DeleteReceitaController";
import { AllReceitasDB } from "./controller/AllReceitasDB";
import { EditReceitaController } from "./controller/EditReceitaController";

const router = Router();

//Receitas que já estão salvas no projeto.
const allReceitas = new AllReceitas();
const receita1 = new Receita1Controller();
const receita2 = new Receita2Controller();
const receita3 = new Receita3Controller();
const receita4 = new Receita4Controller();
const receita5 = new Receita5Controller();

//Rotas das receitas que estão no projeto.
router.get('/all-receitas', allReceitas.handle);
router.get('/receita1', receita1.handle);
router.get('/receita2', receita2.handle);
router.get('/receita3', receita3.handle);
router.get('/receita4', receita4.handle);
router.get('/receita5', receita5.handle);

//Receitas para adicionar no banco de dados.
const newReceita = new NewReceita();
const deleteReceitaController = new DeleteReceitaController();
const allReceitasDB = new AllReceitasDB();
const editReceitaController = new EditReceitaController();

//Rotas das receitas que estão no banco de dados.
router.get('/all-receitas-db', allReceitasDB.handle)
router.post('/new-receita', newReceita.handle);
router.put('/edit-receita', editReceitaController.handle)
router.delete('/delete-receita', deleteReceitaController.handle);

export { router };