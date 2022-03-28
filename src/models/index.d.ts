import { Model, Optional } from 'sequelize'
// We don't recommend doing this. Read on for the new way of declaring Model typings.

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type UserCreationAttributes = Optional<UserAttributes, 'id'>

type UserAttributes = {
  id: number
  firstName: string
  lastName: string
  email: string
  hash: string
}

class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id: number
  declare string: number
  declare firstName: string
  declare lastName: string
  declare email: string
  declare hash: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MovieCreationAttributes = Optional<MovieAttributes, 'id'>

type MovieAttributes = {
  id: number
  title: string
  country: string
  genre: string
  stars: String
  language: string
  release_date: number
  short_desc: string
  // other attributes...
}
class Movie extends Model<MovieAttributes, MovieCreationAttributes> {
  declare id: number
  declare title: string
  declare country: string
  declare genre: string
  declare stars: string
  declare language: string
  declare release_date: number
  declare short_desc: string
  // other attributes...
}
// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MusicCreationAttributes = Optional<MusicAttributes, 'id'>

type MusicAttributes = {
  id: number
  title: string
  country: string
  genre: string
  artist: string
  // other attributes...
}

class Music extends Model<MusicAttributes, MusicCreationAttributes> {
  declare id: number
  declare title: string
  declare country: string
  declare genre: string
  declare artist: string
  // other attributes...
}
