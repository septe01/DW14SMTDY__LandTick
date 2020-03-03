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
      "tickets",
      [
        {
          name_train: "Argo Wilis",
          type_train: 1,
          date_start: "2020-03-03",
          start_station: "manggarai",
          start_time: "09:00:00",
          destination_station: "Bogor",
          arival_time: "16:00:00",
          price: 50000,
          qty: 600,
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          name_train: "Argo Bromo Anggrek",
          type_train: 2,
          date_start: "2020-03-03",
          start_station: "manggarai",
          start_time: "09:00:00",
          destination_station: "sukabumi",
          arival_time: "16:00:00",
          price: 20000,
          qty: 900,
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
    return queryInterface.bulkDelete("tickets", null, {});
  }
};
