import { Request, Response } from 'express'
import { musics } from '../data/musics'
import { BaseHandler } from '../interfaces/handlers'
// Get all Music
class Musics extends BaseHandler {
 static getAllMusics(req: Request, res: Response) {
    return res.status(200).send( musics )
  }

  // Get a music
  static getAMusic(req: Request, res: Response) {
    const musicId = Number(req.params.id)
    const mus = musics.find((item) => item.id === musicId)
    if (mus) {
      return res.status(200).send(mus)
    } else {
      return res.status(404).send({ message: 'MUSIC NOT FOUND!' })
    }
  }

  // Delete A Music
  static deleteAMusic(req: Request, res: Response) {
    const musicId = Number(req.params.id)
    const theMusic = musics.find((music) => music.id === musicId)
    if (theMusic) {
      musics.filter((music) => music.id !== musicId)
      return res.status(204).send()
    } else {
      return res.status(404).send({ message: 'Music does not exist!' })
    }
  }

  // Add a new music
  static addAMusic(req: Request, res: Response) {
    const newMusic = {
      id: req.body.id,
      title: req.body.title,
      country: req.body.country,
      genre: req.body.genre,
      artist: req.body.artist
    }
    musics.push(newMusic)
    return res.status(201).send({
      message: 'Music added successfully',
      musics
    })
  }

  // Update a music
  static updateAMusic(req: Request, res: Response) {
    const musicId = Number(req.params.id)
    const getMusic = musics.find((music) => music.id === musicId)
    if (!getMusic) {
      return res
        .status(404)
        .send({ message: 'Music not found! Please enter a valid music id' })
    } else {
      const musicDetails = req.body
      musics.map((music) => {
        if (music.id === musicId) {
          music.title = musicDetails.title || music.title
          music.country = musicDetails.country || music.country
          music.genre = musicDetails.genre || music.genre
          music.artist = musicDetails.artist || music.artist
          return res
            .status(201)
            .json({ message: 'Music Updated Successfully!', music })
        }
      })
    }
  }
}

export default Musics
