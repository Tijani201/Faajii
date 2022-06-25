import express from 'express'
import musics from '../handlers/musics'

const router = express.Router()

/* Route to get all movies */
router.get('/musics', musics.getAllMusics)

export default router
