const fs = require('fs')
const express = require('express')
const app = express()
const LOG_FILE_PATH = process.env.LOG_FILE_PATH || '../log.txt'
const LOG_PORT = process.env.LOG_PORT || 3002

app.get('/api/status', (request, response) => {
  try {
    const logLine = fs.readFileSync(LOG_FILE_PATH, 'utf8')

    console.log(logLine)
    response.send(logLine)
  } catch (error) {
    console.error(error)
    response.status(500).send(`500 - Internal Server Error: ${error.message}`)
  }
})

app.listen(LOG_PORT, () => {
  console.log(`Server started in port ${LOG_PORT}`)
})
