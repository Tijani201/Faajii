import express from 'express'
import User from '../handlers/users'

const router = express.Router()

// Sign Up route
router.post('/signup', User.signUp)

// Sign Up route
router.post('/signin', User.signIn)

export default router
