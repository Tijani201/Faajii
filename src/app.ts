import createError from 'http-errors'
import express, { Request, Response, NextFunction } from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index'
import usersRouter from './routes/users'
import moviesRouter from './routes/movies'
import musicsRouter from './routes/musics'
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

const swaggerJsDocs = YAML.load(__dirname + '/spec/api.yaml')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/api', moviesRouter)
app.use('/api', musicsRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
})
export default app
