const fs = require('fs')
const express = require('express')
const app = express()

let counter = 0

try {
  const ping = fs.readFileSync('/src/app/data/pingpong.txt', 'utf8')
  counter = parseInt(ping)
} catch (err) {
  console.error(err)
}

const writeCounter = () => {
  fs.writeFile('/src/app/data/pingpong.txt', counter.toString(), err => {
    if (err) {
      console.error(err)
    } else {
      console.log(counter)
    }
  })
}

app.get('/pingpong', (request, response) => {
  response.send(`pong ${counter}`)
  counter += 1
  writeCounter()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  writeCounter()
  console.log(`Server started in port ${PORT}`)
})
