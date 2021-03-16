const express = require('express')
const bodyParser = require('body-parser')
const taskRoutes = require('./server/routers/taskRouters')
const app = express()
const port = 3000

//Config BodyParser
bodyParser.urlencoded({ extended: false})
bodyParser.json()
app.use(bodyParser())

//Config Template Engine
app.set('view engine', 'ejs')
app.set('views', './client/views')

//Config Statics CSS and JavaScript files
app.use('/css', express.static(__dirname + '/client/public/css'))
app.use('/js', express.static(__dirname + '/client/public/js'))
app.use('/img', express.static(__dirname + '/client/public/img'))

//Routers
app.use('/app', taskRoutes)

app.listen(port, () =>{
    console.log('Servirdor Rodando em http://localhost:' + port);
})