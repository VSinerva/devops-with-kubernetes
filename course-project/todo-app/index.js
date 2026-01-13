const fs = require('fs')
const axios = require('axios')
const express = require('express')
const app = express()

const proxy = require('express-http-proxy');

const PORT = process.env.PORT || 3001
const FILE_PATH = process.env.FILE_PATH|| './images/image.jpg'

app.use(express.static('dist'))
app.use(express.static('images'))
app.use(express.static('data'))
if (process.env.DEV_PROXY) {
  console.log('TEST PROXY ENABLED')
  app.use('/', proxy('http://localhost:3002'));
}

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})

const updateImage = replace => {
  if (replace || !fs.existsSync(FILE_PATH)) {
    axios.get('https://picsum.photos/1200', { responseType: 'stream' }).then(response => {
      console.log('Updating picture...')
      response.data.pipe(fs.createWriteStream(FILE_PATH))
    })
  }

  setTimeout(updateImage, 60*10*1000, true)
}

updateImage(false)
