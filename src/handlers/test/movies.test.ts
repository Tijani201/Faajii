import chai from 'chai'
import supertest from 'supertest'
import app from '../../app'

const { expect } = chai
const request = supertest.agent(app)

const newMovie = {
  title: 'Mortal Kombat',
  country: 'Chinese',
  genre: 'Action',
  stars: 'Liu Kang',
  language: 'Chinese',
  release_date: 1997
}

describe('POST /movies/add', () => {
  it('should Add movie', (done) => {
    request
      .post('/api/movies/add')
      .send(newMovie)
      .end((err, res) => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.be.an('object')
        expect(res.body.message).be.equal('Movie added successfully')
        done()
      })
  })
})
