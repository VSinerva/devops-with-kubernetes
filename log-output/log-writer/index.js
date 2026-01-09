const fs = require('fs')

const string = crypto.randomUUID()

const logString = () => {
  const time = new Date()

  fs.readFile('/src/app/data/pingpong.txt', 'utf8', (err, ping) => {
    if (err) {
      console.error(err)
    } else {
      const content =`
${time.toISOString()}: ${string}<br>
Ping / Pongs: ${ping}`

      fs.writeFile('/src/app/data/log.txt', content, err => {
        if (err) {
          console.error(err)
        } else {
          console.log(content)
        }
      })
    }
  })

  setTimeout(logString, 5000)
}

logString()
