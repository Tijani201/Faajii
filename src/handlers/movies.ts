import { Request, Response } from 'express'
import { movies } from '../data/movies'
import { BaseHandler } from '../interfaces/handler'

class Movies extends BaseHandler {
  // Get all movies
  static getAllMovies(req: Request, res: Response) {
    return res.status(200).send({ movies })
  }

  // Get a movie
  static getAMovie(req: Request, res: Response) {
    const movieId = Number(req.params.id)
    const mov = movies.find((item) => item.id === movieId)
    if (mov) {
      return res.status(200).send(mov)
    } else {
      return res.status(404).send({ message: 'MOVIES NOT FOUND!' })
    }
  }
}

export default Movies
