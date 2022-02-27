'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Musics.init({
    title: DataTypes.STRING,
    country: DataTypes.STRING,
    genre: DataTypes.STRING,
    artist: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Musics',
  });
  return Musics;
};