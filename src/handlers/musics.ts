import { Request, Response } from 'express'
import { musics } from '../data/musics'
import { BaseHandler } from '../interfaces/handler'

class Musics extends BaseHandler {
  // Get all musics
  static getAllMusics(req: Request, res: Response) {
    return res.status(200).send({ musics })
  }
}

export default Musics
