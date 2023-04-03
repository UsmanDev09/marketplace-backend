import 'dotenv/config'
import mongoose from 'mongoose'

import server from './utils/server'
import env from './utils/validateEnv'
import logger from './config/logger'

const port = env.PORT

const app = server()

mongoose.connect(env.MONGO_CONNECTION_URL)
.then(() => {
    logger.info('Mongoose Connected')
})
.catch((error) =>  logger.error(error))

app.listen(port, () => logger.info(`Started server on port: ${port}`))

