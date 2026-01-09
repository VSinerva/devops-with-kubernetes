import { useState } from 'react'

const App = () => {
  const [tasks] = useState([
    {
      id: 0,
      text: "Finish the DevOps with Kubernetes Course"
    },
    {
      id: 1,
      text: "Plan your Thesis"
    }
  ])

  return (
    <div>
      <h2>Course Project App</h2>
      <img src="./image.jpg" width={500}/>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.text}</li>)}
      </ul>
      <form>
        <input type="text" maxlength="140"/>
        <button type="submit">Create todo</button>
      </form>
    </div>
  )
}

export default App

