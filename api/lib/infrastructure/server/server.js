import express from 'express'
import bodyParser from 'body-parser'
import UserRouter from './routers/user-router'
import compression from 'compression'
import logger from 'morgan'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.js'

const app = express()
const port = process.env.PORT || 8000

app.use(logger('dev'))
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/api/users', UserRouter)

app.get('/', (_req, res) =>
  res.status(200).send({
    status: 'Success',
    message: 'Welcome to together API',
  })
)

app.get('*', (_req, res) =>
  res.status(404).send({
    status: 'Error',
    message: 'Path not found :(',
  })
)

app.listen(port, () => {
  console.log(`Server port: ${port}`)
})

export default app
