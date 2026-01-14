const express = require('express')
const app = express()
const PING_PONG_PORT = process.env.PING_PONG_PORT || 3001

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

app.listen(PING_PONG_PORT, () => {
  console.log(`Server started in port ${PING_PONG_PORT}`)
})
