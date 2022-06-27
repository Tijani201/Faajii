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

// test to add a movie
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

// test to delete a movie
describe('DELETE /movies/:id', () => {
  it('should delete a movie', (done) => {
    request
      .delete('/api/movies/1')
      .expect(204)
      .end((err, res) => {
        expect(res.status).to.be.equal(204)
        expect(res.body).to.be.an('object')
        done()
      })
  })
  it('should display a message if movie not found', (done) => {
    request
      .delete('/api/movies/10000')
      .expect(404)
      .end((err, res) => {
        expect(res.status).to.be.equal(404)
        expect(res.body.message).to.be.equal('Movie does not exist!')
        done()
      })
  })
})
