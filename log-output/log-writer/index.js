const fs = require('fs')

const string = crypto.randomUUID()

const logString = () => {
  const time = new Date()
  const content = `${time.toISOString()}: ${string}`

  fs.writeFile('/src/app/data/log.txt', content, err => {
    if (err) {
      console.error(err)
    } else {
      console.log(content)
    }
  })

  setTimeout(logString, 5000)
}

logString()
