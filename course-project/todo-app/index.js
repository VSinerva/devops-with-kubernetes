const fs = require('fs')
const axios = require('axios')
const express = require('express')
const app = express()

const proxy = require('express-http-proxy');

const FRONTEND_PORT = process.env.FRONTEND_PORT || 3001
const BACKEND_PORT = process.env.BACKEND_PORT || 3002
const IMAGE_URL = process.env.IMAGE_URL || 'https://picsum.photos/1200'
const IMAGE_FILE_PATH = process.env.IMAGE_FILE_PATH || './images/image.jpg'

app.use(express.static('dist'))
app.use(express.static('images'))
app.use(express.static('data'))
if (process.env.DEV_PROXY) {
  console.log('DEV PROXY ENABLED')
  app.use('/', proxy(`http://localhost:${BACKEND_PORT}`));
}

app.listen(FRONTEND_PORT, () => {
  console.log(`Server started in port ${FRONTEND_PORT}`)
})

const updateImage = async replace => {
  try {
    if (replace || !fs.existsSync(IMAGE_FILE_PATH)) {
      const response = await axios.get(IMAGE_URL, { responseType: 'stream' })

      console.log('Updating picture...')
      response.data.pipe(fs.createWriteStream(IMAGE_FILE_PATH))
    }
  } catch (error) {
    console.log(error)
  }

  setTimeout(updateImage, 60*10*1000, true)
}

updateImage(false)
