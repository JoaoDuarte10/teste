require('dotenv').config();
import express from 'express'
import { router } from './routes';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

//Conexão com o banco de dados.
mongoose.connect('mongodb+srv://joaodb:joaoduarte123@cluster0.qtsmw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
//process.env.MONGO_CONNECTION
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection DB Error:'));
db.once('open', function() {
  console.log("DB connected")
});

const app = express();

app.use(express.json());
app.use(router);

//Tratando rotas que não existem.
app.use(function(req: Request, res: Response, next: NextFunction){
    res.status(404).send("Essa rota não existe!")
})

app.listen(process.env.PORT)