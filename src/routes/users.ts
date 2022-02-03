import express, { Request, Response, NextFunction } from 'express'
import User from '../handlers/users'

const router = express.Router()

// Sign Up route
router.post('/signup', User.signUp)

export default router
