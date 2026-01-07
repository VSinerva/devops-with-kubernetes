require('dotenv').config()
const express = require('express')
const app = express()

let counter = 0

app.get('/pingpong', (request, response) => {
  response.send(`pong ${counter}`)
  counter += 1
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
