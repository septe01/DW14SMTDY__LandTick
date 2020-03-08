"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    return queryInterface.bulkInsert(
      "orders",
      [
        {
          id_ticket: 1,
          id_user: 2,
          qty: 2,
          total_price: 10000,
          status: "a",
          attachment: "https://i.imgur.com/Iqlugn5.jpg",
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          id_ticket: 2,
          id_user: 3,
          qty: 5,
          total_price: 10000,
          status: 1,
          attachment: "https://i.imgur.com/Iqlugn5.jpg",
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          id_ticket: 2,
          id_user: 3,
          qty: 5,
          total_price: 20000,
          status: "p",
          attachment: "",
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete("orders", null, {});
  }
};
