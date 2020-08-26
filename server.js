const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 8080


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors());



app.listen(port, () => console.log(`//Server started at port${port}`))
//use "start": "nodemon server.js", and start npm run start
// - npm instal -D nodemon --> -D é a mesma coisa que --save-dev, instala localmente

