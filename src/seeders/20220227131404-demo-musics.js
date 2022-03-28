'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Musics', [
      {
        id: 1,
        title: 'Zazu zeh',
        country: 'Naija',
        genre: 'Hip-hop',
        artist: 'Portable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Reality',
        country: 'Nigeria',
        genre: 'Fuji',
        artist: 'Ayinde Barrister',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Go easy on me',
        country: 'British',
        genre: 'RnB',
        artist: 'Adele',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Confession',
        country: 'American',
        genre: 'Blues',
        artist: 'Usher Raymond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Despasito',
        country: 'Mexican',
        genre: 'Spanish Hiphop',
        artist: 'Daddy Yankee',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Musics', null, {})
  }
}
