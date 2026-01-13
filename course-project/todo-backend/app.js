const express = require('express')
const todosRouter = require('./controllers/todos')
const middleware = require('./utils/middleware')

const app = express()

app.use(express.json())

app.use('/todos', todosRouter)
app.use(middleware.errorHandler)

module.exports = app
