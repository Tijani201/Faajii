import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'

const secret = 'codingClass'
const rounds = 10
const user = []

class User {
  static signUp(req: Request, res: Response) {
    if (!isEmail(req.body.email)) {
      return res.status(400).send({ message: 'Email Invalid' })
    } else {
      const password = req.body.password
      const confirmPassword = req.body.confirmPassword
      const checkPasword = password === confirmPassword
      if (checkPasword) {
        const newUser = {
          id: req.body.id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          hash: bcrypt.hashSync(password, rounds)
        }

        user.push(newUser)
        return res.status(201).send({
          message: 'Sign Up Sucessful',
          token: jwt.sign(
            {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              id: newUser.id
            },
            secret
          )
        })
      } else {
        return res.status(400).send({
          message: 'Passwords do not match'
        })
      }
    }
  }
}

export default User
