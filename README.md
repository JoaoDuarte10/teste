# Projeto Back End Coco Bambu - Teste

    Foi desenvolvido o back end da aplicação, com as seguintes funcionalidades:

## Foi criado dois tipos de receitas:

    O primeiro, são as receitas escritas em um objeto dentro do projeto.

    Contém um arquivo ( /models/receitas.ts ) que tem todas as receitas juntas, simulando o comando ( find ) do MongoDB.
    Contém 5 arquivos ( /models/receita1 .. receita2 ... ) para simular um documento do MongoDB.

    O segundo são as receitas que se conectam ao MongoDB.

    Contém um model ( /models/ReceitasDB ) que é um Schema para salvar as receitas no Banco de Dados.

### Métodos das receitas que estão dentro do projeto
    Busca de todas as receitas;
    Busca de cada receita independente;

## Para iniciar o projeto
    1 - npm install || yarn install
    2 - npm start-node || yarn start-node

    O projeto está configurado para rodar na porta 3000. Caso precise ser alterada a porta, basta editar o arquivo ( .env / PORT )

### Rotas das receitas que estão no projeto:

    Get:
        http://localhost:3000/all-receitas 
        http://localhost:3000/receita1
        http://localhost:3000/receita2
        http://localhost:3000/receita3
        http://localhost:3000/receita4
        http://localhost:3000/receita5

### Métodos das receitas que estão no banco de dados

    Busca de todas as receitas.
    Inserção de novas receitas.
    Atualizar reeitas existentes.
    Deletar receitas.

### Rotas das receitas que estão no banco de dados

    Get:
        http://localhost:3000/all-receitas-db

    Post:
        http://localhost:3000/new-receita

    Put:
        http://localhost:3000/edit-receita

    Delete:
        http://localhost:3000/delete-receita

### Campos que as rotas Post, Put e Delete aceitam:

    - title
    - description
    - ingredientes
    - tempoDePreparo
    - modoDePreparo

## String de conexão

    A string de conexão com o banco de dados é:

    'mongodb://localhost:27017'

    Caso precise ser alterada, a string de conexão com o banco de dados se encontra no arquivo ( .env / MONGO_CONNECTION )

## Sobre o projeto

    O projeto foi desenvolvido com o paradigma de Orientação a Objetos.