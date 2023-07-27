'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Guardians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      alias: {
        type: Sequelize.STRING(15)
      },
      max_defence_power: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      max_attack_power: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      is_certified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      government_allowance: {
        type: Sequelize.DECIMAL(10,2)
      },
      date_introduced: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Guardians');
  }
};