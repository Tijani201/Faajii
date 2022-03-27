import express, { Request, Response} from 'express'

const router = express.Router()

/* GET home page. */
const welcomeRoute = (req: Request, res: Response) => {
  res.status(200).send({ title: 'Welcome to Faaji Entertainment API' })
}

router.get('/', welcomeRoute)

export default router
