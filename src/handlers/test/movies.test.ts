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

// test to update a movie
describe('PUT /movies/:id', () => {
  it('should UPDATE a movie given the id', (done) => {
    request
      .put('/api/movies/1')
      .send(newMovie)
      .end((err, res) => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.be.an('object')
        expect(res.body.message).be.equal('Movie Updated Successfully!')
        done()
      })
  })
  it('should UPDATE a movie if only one feild is provided', (done) => {
    request
      .put('/api/movies/1')
      .send({ title: 'confession' })
      .end((err, res) => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.be.an('object')
        expect(res.body.message).be.equal('Movie Updated Successfully!')
        done()
      })
  })
  it('should UPDATE a movie if only one feild is provided', (done) => {
    request
      .put('/api/movies/1')
      .send({ country: 'nigeria' })
      .end((err, res) => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.be.an('object')
        expect(res.body.message).be.equal('Movie Updated Successfully!')
        done()
      })
  })
  it('should return no movie if id does not exist', (done) => {
    request
      .put('/api/movies/10')
      .send(newMovie)
      .end((err, res) => {
        expect(res.status).to.be.equal(404)
        expect(res.body.message).be.equal(
          'Movie not found! Please enter a valid movie id'
        )
        done()
      })
  })
})

// test to get a movie
describe('GET /movies/:id', () => {
  it('should return a specific movie', (done) => {
    request
      .get('/api/movies/1')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).to.be.an('object')
        done()
      })
  })
  it('should display a message if movie is not found', (done) => {
    request
      .get('/api/movies/1000000')
      .expect(404)
      .end((err, res) => {
        expect(res.status).to.be.equal(404)
        expect(res.body.message).to.be.equal('MOVIES NOT FOUND!')
        done()
      })
  })
})

// test to get all movie
describe('GET /movies', () => {
  it('should return all movies', (done) => {
    request
      .get('/api/movies')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).to.be.an('array')
        done()
      })
  })
})
