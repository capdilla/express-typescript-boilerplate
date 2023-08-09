'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      user_id: { type: Sequelize.INTEGER },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  },
};
