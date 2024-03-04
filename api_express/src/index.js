import express, { json, urlencoded } from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import blogRoutes from './routes/blog.route.js'
import loggerMiddleware from './middlewares/logger.middleware.js'
import methodNotAllowedMiddleware from './middlewares/method-not-allowed.middleware.js'
import notFoundEndpoint from './middlewares/not-found.middleware.js'
import swaggerSpecs from './config/swagger.config.js'
import { connectDB } from './config/db.config.js'

const app = express()
const port = 3000

connectDB()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

// Middlewares
app.use(loggerMiddleware)
app.use(methodNotAllowedMiddleware)

// Routes
app.use('/api', blogRoutes)
app.use(
  '/api/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs),
)

app.use(notFoundEndpoint)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
