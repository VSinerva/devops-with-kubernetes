const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.BACKEND_PORT, () => {
  logger.info(`Server running on port ${config.BACKEND_PORT}`)
})
