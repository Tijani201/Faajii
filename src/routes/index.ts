import express, { Request, Response, NextFunction } from 'express'

const router = express.Router()

/* GET home page. */
const welcomeRoute = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ title: 'Welcome to Faaji API' })
}

router.get('/', welcomeRoute)

export default router
