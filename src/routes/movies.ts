import express from 'express'
import movies from '../handlers/movies'

const router = express.Router()

/* Route to get all movies */
router.get('/movies', movies.getAllMovies)

/* Route to get a school by id */
router.get('/movies/:id', movies.getAMovie)

export default router
