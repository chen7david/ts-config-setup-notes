import 'dotenv/config'
import { config } from './config/default.config'
console.log(process.env.NODE_ENV)
console.log(config.serverString)
import { connection } from './knex'
console.log({config})
export {}