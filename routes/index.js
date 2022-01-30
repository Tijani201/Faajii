import express from 'express'

const router = express.Router()

/* GET home page. */
const welcomeRoute = (req, res, next) => {
  res.status(200).send({ title: 'Welcome to Faaji API' })
}

router.get('/',  welcomeRoute);

module.exports = router;
