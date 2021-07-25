import { Schema, model } from 'mongoose'

const schema = new Schema({
    title: String,
    description: String,
    ingredientes: [String],
    tempoPreparo: String,
    modoDePreparo: [String]
})

const ReceitaModel = model('Receita', schema)

export { ReceitaModel }