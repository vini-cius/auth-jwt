import knex from 'knex';
import path from 'path'
import 'dotenv/config'

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
})

export default db;
