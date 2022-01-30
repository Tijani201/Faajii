import express from 'express'
import movies from '../handlers/movies'

const router = express.Router()

/* Route to get all movies */
router.get('/movies', movies.getAllMovies)


export default router
