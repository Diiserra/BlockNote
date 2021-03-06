const express = require('express')
const bodyParser = require('body-parser')
const taskRoutes = require('./server/routers/taskRouters')
const app = express()
const port = 3000

//Config BodyParser
bodyParser.urlencoded({ extended: false})
bodyParser.json()
app.use(bodyParser())

//Routers
app.use('/app', taskRoutes)

app.listen(port, () =>{
    console.log('Servirdor Rodando em http://localhost:' + port);
})