'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      stars: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.INTEGER
      },
      short_desc: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};