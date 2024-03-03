import express, { json, urlencoded } from 'express'
import cors from 'cors'
import blogRoutes from './routes/blog.route.js'
import loggerMiddleware from './middlewares/logger.middleware.js'
import { connectDB } from './config/db.config.js'

const app = express()
const port = 3000

connectDB()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

// Middlewares
app.use(loggerMiddleware)

// Routes
app.use('/api', blogRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
