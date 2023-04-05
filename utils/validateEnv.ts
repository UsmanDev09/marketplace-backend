import { cleanEnv, str, port } from 'envalid'

const env = cleanEnv(process.env, {
    MONGO_CONNECTION_URL: str(),
    PORT: port(),
    JWT_SECRET_KEY: str(),
    GOOGLE_SECRET_KEY: str(),
    GOOGLE_CLIENT_ID: str()
})


export default env
