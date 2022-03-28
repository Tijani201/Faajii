'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        firstName:'Adavuruku',
        lastName:'Adibaba',
        email:'usman@gmail.com',
        hash:'Mamudu8728../',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        firstName:'Tijani',
        lastName:'Usman',
        email:'badmantj@gmail.com',
        hash:'Teejay/10.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
