import { useState, useEffect } from 'react'

import todoService from './services/todos'

const App = () => {
  const [newTodo, setNewTodo] = useState([])
  const [todos, setTodos] = useState([])

  useEffect(() => {
    (async () => {
      const initialTodos = await todoService.getAll()
      setTodos(initialTodos)
    })()
  }, [])

  const handleNewTodoChange = event => {
    if (event.target.value.length <= 140 )
      setNewTodo(event.target.value)
  }

  const addTodo = async event => {
    event.preventDefault()
    const returnedTodo = await todoService.create({text: newTodo})
    setTodos(todos.concat(returnedTodo))
    setNewTodo('')
  }

  return (
    <div>
      <h2>Course Project App</h2>
      <img src="./image.jpg" width={500}/>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
      </ul>
      <form onSubmit={addTodo}>
        <input value={newTodo} onChange={handleNewTodoChange}/>
        <button type="submit">Create todo</button>
      </form>
    </div>
  )
}

export default App
