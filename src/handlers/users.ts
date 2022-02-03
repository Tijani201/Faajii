import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import { Users } from '../interfaces/handlers'

const secret = 'codingClass'
const rounds = 10
const users:Users[] = []

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

        users.push(newUser)
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

  //signIn User
  static signIn(req: Request, res: Response) {
    const email = req.body.email
    const password = req.body.password
    if (!isEmail(req.body.email)) {
      return res.status(400).send({ message: 'Email or password incorrect' })
    } else {
      const findUser = users.find((user: any) => user.email === email)
      if (findUser) {
        if (!bcrypt.compareSync(password, findUser.hash)) {
          return res
            .status(200)
            .send({ message: 'Email or password incorrect' })
        } else {
          return res.status(200).send({
            message: 'Sign in Successful',
            token: jwt.sign(
              {
                firstName: findUser.firstName,
                lastName: findUser.lastName,
                email: findUser.email,
                id: findUser.id
              },
              secret
            ),
            firstName: findUser.firstName,
            lastName: findUser.lastName,
            email: findUser.email
          })
        }
      } else {
        return res.status(400).send({ message: 'Email or password incorrect' })
      }
    }
  }
}

export default User
