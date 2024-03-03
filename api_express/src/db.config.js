export const HOST = '127.0.0.1'
export const USER = 'root'
export const PASSWORD = 'root_password'
export const DB = 'blog_db'
export const dialect = 'mysql'
export const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
}
