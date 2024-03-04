import swaggerJsdoc from 'swagger-jsdoc'

const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Docker Blog Express API',
      version: '1.0.0',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Angel Herrarte',
        email: 'angelherrarte3@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['**/routes/*.js', '**/models/*.js'],
}

const swaggerSpecs = swaggerJsdoc(swaggerOptions)

export default swaggerSpecs
