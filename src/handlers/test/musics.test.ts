import chai from 'chai'
import supertest from 'supertest'
import app from '../../app'

const { expect } = chai
const request = supertest.agent(app)

const newMusic = {
  title: 'Mortal Kombat',
  country: 'Chinese',
  genre: 'Action',
  stars: 'Liu Kang',
  language: 'Chinese',
  release_date: 1997
}

// test to get all music
describe('GET /musics', () => {
  it('should return all musics', (done) => {
    request
      .get('/api/musics')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).to.be.an('array')
        done()
      })
  })
})

// test to delete a music
describe('DELETE /musics/:id', () => {
  it('should delete a music', (done) => {
    request
      .delete('/api/musics/1')
      .expect(204)
      .end((err, res) => {
        expect(res.status).to.be.equal(204)
        expect(res.body).to.be.an('object')
        done()
      })
  })
  it('should display a message if music not found', (done) => {
    request
      .delete('/api/musics/10000')
      .expect(404)
      .end((err, res) => {
        expect(res.status).to.be.equal(404)
        expect(res.body.message).to.be.equal('Music does not exist!')
        done()
      })
  })
})
