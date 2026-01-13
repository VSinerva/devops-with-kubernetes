const fs = require('fs')
const axios = require('axios')
const FILE_PATH = process.env.FILE_PATH || '../log.txt'
const PING_URL = process.env.PING_URL || 'http://localhost:3001/pings'

const string = crypto.randomUUID()

const logString = () => {
  const time = new Date()

  axios.get(PING_URL)
    .then(response => {
      const ping = response.data
      const content =`
${time.toISOString()}: ${string}<br>
Ping / Pongs: ${ping}`

      fs.writeFile(FILE_PATH, content, err => {
        if (err) {
          console.error(err)
        } else {
          console.log(content)
        }
      })
    })
    .catch(error => {
      console.error(error)
    })

  setTimeout(logString, 5000)
}

logString()
