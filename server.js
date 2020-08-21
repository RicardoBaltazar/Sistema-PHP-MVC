const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/*
const posts = [
    {
      nome: 'Aluno1',
      idade: 12
    },
    {
      nome: 'Aluno2',
      idade: 13
    },
    {
      nome: 'Aluno3',
      idade: 14
    },
    {
      nome: 'Aluno4',
      idade: 15
    }
  ]
*/


app.get("/", function(req, res){
    res.send('teste')
})




app.listen(port, () => console.log(`//Server started at port${port}`))
//use "start": "nodemon server.js", and start npm run start
// - npm instal -D nodemon --> -D é a mesma coisa que --save-dev, instala localmente
