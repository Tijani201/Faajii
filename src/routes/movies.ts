import express from 'express'
import movies from '../handlers/movies'

const router = express.Router()

/* Route to get all movies */
router.get('/movies', movies.getAllMovies)

/* Route to get a school by id */
router.get('/movies/:id', movies.getAMovie)

/* Route to add a school */
router.post('/movies/add', movies.addAMovie)

export default router
