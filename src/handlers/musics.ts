import { Request, Response } from 'express'
import { musics } from '../data/musics'
import { BaseHandler } from '../interfaces/handler'

class Musics extends BaseHandler {
  // Get all musics
  static getAllMusics(req: Request, res: Response) {
    return res.status(200).send({ musics })
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
}

export default Musics
