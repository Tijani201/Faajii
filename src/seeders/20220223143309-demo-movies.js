'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        id: 1,
        title: 'Hotel Transylvania',
        country: 'American',
        genre: 'Adventure',
        stars: 'Selena Gomez',
        language: 'English',
        release_date: 2015,
        short_desc:
          'The film tells the story of Count Dracula, the owner of a hotel called Hotel Transylvania where the worlds monsters can take a rest from human civilization.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Vivo',
        country: 'Cuba',
        genre: 'Comedy',
        stars: 'Nicole Byer ',
        language: 'English',
        release_date: 2021,
        short_desc:
          'Vivo follows a one-of-kind kinkajou (aka a rainforest "honey bear") who spends his days playing music to the crowds in a lively square with his beloved owner Andrés. Though they may not speak the same language',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Coco',
        country: 'Mexican',
        genre: 'Animation',
        stars: 'Coco Fusco',
        language: 'Spanish',
        release_date: 2017,
        short_desc:
          'The story follows a 12-year-old boy named Miguel who is accidentally transported to the Land of the Dead,',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'A Naija Christmas',
        country: 'Nigeria',
        genre: 'Adventure, Comedy, Story',
        stars: 'Rachel Oniga',
        language: 'English, Yoruba',
        release_date: 2021,
        short_desc:
          'A funny movie about a amother of 3 boys whom she promised the family heritance to the first person to bring a fiance home before christmas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'King Of Boys',
        country: 'Naija',
        genre: 'Action',
        stars: 'Sola Sobowale',
        language: 'English, Igbo',
        release_date: 2015,
        short_desc: 'A movies about tussle of powers among the bigger citizens',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {})
  }
}
