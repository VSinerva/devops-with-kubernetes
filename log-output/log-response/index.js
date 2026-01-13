const fs = require('fs')
const express = require('express')
const app = express()
const FILE_PATH = process.env.FILE_PATH|| '../log.txt'
const PORT = process.env.PORT || 3001

app.get('/api/status', (request, response) => {
  fs.readFile(FILE_PATH, 'utf8', (err, logLine) => {
    if (err) {
      console.error(err)
      response.status(500).send(`500 - Internal Server Error: ${err.message}`)
    } else {
      console.log(logLine)
      response.send(logLine)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
