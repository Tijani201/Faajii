import express from 'express'
import musics from '../handlers/musics'

const router = express.Router()

/* Route to get all movies */
router.get('/musics', musics.getAllMusics)
/* Route to get a music by id */
router.get('/musics/:id', musics.getAMusic)
/* Route to add a music */
router.post('/musics/add', musics.addAMusic)
/* Route to update a music */
router.put('/musics/:id', musics.updateAMusic)
/* Route to delete a music by id */
router.delete('/musics/:id', musics.deleteAMusic)

export default router
