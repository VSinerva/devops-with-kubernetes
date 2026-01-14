const fs = require('fs')
const axios = require('axios')
const MESSAGE = process.env.MESSAGE || ''
const INFORMATION_FILE_PATH = process.env.INFORMATION_FILE_PATH || '../information.txt'
const LOG_FILE_PATH = process.env.LOG_FILE_PATH || '../log.txt'
const PING_URL = process.env.PING_URL || 'http://localhost:3001/pings'

const uuid = crypto.randomUUID()

const logString = async () => {
  const time = new Date()

  try {
    const response = await axios.get(PING_URL)

    const fileData = fs.readFileSync(INFORMATION_FILE_PATH, 'utf8')

    const ping = response.data
    const content =`
file content: ${fileData}<br>
env variable: MESSAGE=${MESSAGE}<br>
${time.toISOString()}: ${uuid}<br>
Ping / Pongs: ${ping}`

    fs.writeFileSync(LOG_FILE_PATH, content)
    console.log(content)
  } catch (error) {
    console.error(error)
  }

  setTimeout(logString, 5000)
}

logString()
