const todosRouter = require('express').Router()

let nextId = 3
let todos = [
  {
    id: 0,
    text: 'Finish the DevOps with Kubernetes Course'
  },
  {
    id: 1,
    text: 'Plan your Thesis'
  },
  {
    id: 2,
    text: 'Finish current task'
  }
]

todosRouter.get('/', async (request, response) => {
  response.json(todos)
})

todosRouter.post('/', async (request, response) => {
  const newTodo = { id: nextId, ...request.body }
  nextId += 1
  todos.push(newTodo)
  response.status(201).json(newTodo)
})

module.exports = todosRouter
