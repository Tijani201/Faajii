import { Request, Response } from 'express'
import { movies } from '../data/movies'
import { BaseHandler } from '../interfaces/handlers'

class Movies extends BaseHandler {
  // Get all movies
  static getAllMovies(req: Request, res: Response) {
    return res.status(200).send({ movies })
  }
}

export default Movies
