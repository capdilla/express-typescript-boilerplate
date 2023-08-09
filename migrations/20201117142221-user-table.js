'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      age: { type: Sequelize.INTEGER },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
