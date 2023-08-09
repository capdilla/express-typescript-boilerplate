'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('posts', {
      type: 'FOREIGN KEY',
      name: 'FK_post_user',
      fields: ['user_id'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('posts', 'FK_post_user');
  },
};
