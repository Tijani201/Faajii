import { Request, Response } from 'express'
import { movies } from '../data/movies'
import { BaseHandler } from '../interfaces/handlers'

// Get all movies
class Movie extends BaseHandler {
  static getAllMovies(req: Request, res: Response) {
    return res.status(200).send( movies )
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

  // Add a new movie
  static addAMovie(req: Request, res: Response) {
    const newMovie = {
      id: req.body.id,
      title: req.body.title,
      country: req.body.country,
      genre: req.body.genre,
      stars: req.body.stars,
      language: req.body.language,
      release_date: req.body.release_date,
      short_desc: req.body.short_desc
    }
    movies.push(newMovie)
    return res.status(201).send({
      message: 'Movie added successfully',
      movies
    })
  }

  // Delete A Movie
  static deleteAMovie(req: Request, res: Response) {
    const movieId = Number(req.params.id)
    const theMovie = movies.find((movie) => movie.id === movieId)
    if (theMovie) {
      movies.filter((movie) => movie.id !== movieId)
      return res.status(204).send()
    } else {
      return res.status(404).send({ message: 'Movie does not exist!' })
    }
  }

  // Update a movie
  static updateAMovie(req: Request, res: Response) {
    const movieId = Number(req.params.id)
    const getMovie = movies.find((movie) => movie.id === movieId)
    if (!getMovie) {
      return res
        .status(404)
        .send({ message: 'Movie not found! Please enter a valid movie id' })
    } else {
      const movieDetails = req.body
      movies.map((movie) => {
        if (movie.id === movieId) {
          movie.title = movieDetails.title || movie.title
          movie.country = movieDetails.country || movie.country
          movie.genre = movieDetails.genre || movie.genre
          movie.stars = movieDetails.stars || movie.stars
          movie.language = movieDetails.language || movie.language
          movie.release_date = movieDetails.release_date || movie.release_date
          movie.short_desc = movieDetails.short_desc || movie.short_desc
          return res
            .status(201)
            .json({ message: 'Movie Updated Successfully!', movie })
        }
      })
    }
  }
}

export default Movie
