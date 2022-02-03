import chai from 'chai'
import supertest from 'supertest'
import app from '../../app'

const { expect } = chai
const request = supertest.agent(app)

const newUser = {
  firstName: 'Teejay',
  lastName: 'usman',
  email: 'barcelona@gmail.com',
  password: 'usat',
  confirmPassword: 'usat'
}

describe('User', () => {
  describe('POST /api/users/signup', () => {
    it('should Create New User', (done) => {
      request
        .post('/api/users/signup')
        .send(newUser)
        .end((err, res) => {
          expect(res.status).to.be.equal(201)
          expect(res.body.message).be.equal('Sign Up Sucessful')
          done()
        })
    })
    it('should return Email Invalid', (done) => {
      const userInvalidEmail = {
        firstName: 'Teejay',
        lastName: 'usman',
        email: 'barcelonagmail.com',
        password: 'usat',
        confirmPassword: 'usat'
      }
      request
        .post('/api/users/signup')
        .send(userInvalidEmail)
        .end((err, res) => {
          expect(res.status).to.be.equal(400)
          expect(res.body.message).be.equal('Email Invalid')
          done()
        })
    })
    it('should return Password do not Match', (done) => {
      const userPassword = {
        firstName: 'Teejay',
        lastName: 'usman',
        email: 'barcelona@gmail.com',
        password: 'usat',
        confirmPassword: 'usa'
      }
      request
        .post('/api/users/signup')
        .send(userPassword)
        .end((err, res) => {
          expect(res.status).to.be.equal(400)
          expect(res.body.message).be.equal('Passwords do not match')
          done()
        })
    })
  })
})
