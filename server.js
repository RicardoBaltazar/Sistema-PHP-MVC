const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res){
    return res.send('Ola Mundo!')
})




app.listen(8080, () => console.log('//Server started at http://localhost:8080'))
//use "start": "nodemon server.js", and start npm run start
