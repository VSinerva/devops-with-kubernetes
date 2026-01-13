const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

let counter = 0

app.get('/pingpong', (request, response) => {
  response.send(`pong ${counter}`)
  console.log(`pong ${counter}`)
  counter += 1
})

app.get('/pings', (request, response) => {
  response.send(counter.toString())
  console.log(`pings: ${counter}`)
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
