import { Sequelize } from 'sequelize'

const config = {
  host: '127.0.0.1',
  port: 33068,
  user: 'root',
  password: 'root_password',
  db: 'blog_db',
  dialect: 'mysql',
}

const db = new Sequelize(
  config.db,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
  },
)

export function connectDB() {
  db.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err)
    })
}

export function closeDB() {
  db.close()
}
