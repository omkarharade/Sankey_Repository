'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Tests', [
      {
      name: 'Ijuku Midoriya',
      alias: 'DEKU',
      max_defence_power: 1500,
      max_attack_power: 3000,
      is_certified: true,
      government_allowance: 400000.50,
      date_introduced: '2023-07-24 15:30:00',
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      name: 'Yamato Kirishima',
      alias: 'RED RIOT',
      max_defence_power: 900,
      max_attack_power: 2000,
      is_certified: true,
      government_allowance: 200000.50,
      date_introduced: '2023-07-24 15:30:00',
      createdAt: new Date(),
			updatedAt: new Date(),
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Tests', null, {});
  }
};
