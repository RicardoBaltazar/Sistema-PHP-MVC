//adicionando express no projeto
const express = require('express')
const bodyParser = require('body-parser')
//requisitando cors para habilitar que outras aplicações acessem a api
const cors = require('cors')

const port = 8080

//requisitando o arquivos das rotas dos usuarios
const userRoute = require('./userRouter')

const app = express()
//definir a porta que sera rodado a aplicação
app.use(cors()) //deixe o parametro vazio para liberar o acesso para qualquer dominio

//dizeendo para o node que vamos usar o midelware bodyParse
app.use(bodyParser.urlencoded({ extended: false}))

userRoute(app)

app.get("/", function(req, res){
    res.send('Ola Mundo!')
})


app.listen(port, function(){
    console.log(`Servidor Rodando na porta ${port}`)
})



/*
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 8080

//let db = require('./db.json')

app.use(express.json()); // faz com que o express entenda JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors());
const posts = []

app.get("/posts", (req,res) => {
    return res.json({
        posts
    })
})


app.get('/posts/:id', (req, res) => {
    return res.json({posts});
})

app.post('/posts', (req, res) => {
    const name  = req.body; // assim esperamos buscar o name informado dentro do body da requisição
    posts.push(name);
    return res.json(posts); // retorna a informação da variável geeks
})


app.listen(port, () => console.log(`//Server started at port${port}`))


//use "start": "nodemon server.js", and start npm run start
// - npm instal -D nodemon --> -D é a mesma coisa que --save-dev, instala localmente


/*
PASTAS 

config: Será onde vamos colocar o nosso arquivo de configuração do nosso servidor.
controller: será onde vamos salvar os arquivos que são responsáveis por controlar as nossas requisições e retorna-las.
model: será onde vamos salvar os modelos de entidade que utilizaremos para persistir os dados no banco.
service: será onde vamos adicionar as regras de negócio da nossa aplicação.
repository: será onde vamos salvar os arquivos que cuidarão do acesso ao nosso banco de dados.
routes: aqui salvaremos as rotas da nossa aplicação.
*/

