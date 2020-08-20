const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const server = express()
server.listen(8080, () => console.log('Express started at http://localhost:8080'))