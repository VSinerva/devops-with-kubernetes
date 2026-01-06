require('dotenv').config()
const express = require('express')
const app = express()

const string = crypto.randomUUID()

app.get('/api/status', (request, response) => {
  const time = new Date()
  response.send(`${time.toISOString()}: ${string}`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})

const logString = () => {
  const time = new Date()
  console.log(`${time.toISOString()}: ${string}`)
  setTimeout(logString, 5000)
}

logString()
