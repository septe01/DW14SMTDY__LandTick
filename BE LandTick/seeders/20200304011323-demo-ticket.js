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
          date_start: "2020-03-08",
          start_station: "manggarai",
          start_time: "07:30:00",
          destination_station: "Bogor",
          arival_time: "16:40:00",
          price: 50000,
          qty: 600,
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          name_train: "Anggrek",
          type_train: 2,
          date_start: "2020-03-08",
          start_station: "manggarai",
          start_time: "10:20:00",
          destination_station: "sukabumi",
          arival_time: "16:40:00",
          price: 20000,
          qty: 900,
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          name_train: "Bromo",
          type_train: 1,
          date_start: "2020-03-08",
          start_station: "Kota",
          start_time: "09:10:00",
          destination_station: "Bandara",
          arival_time: "16:30:00",
          price: 90000,
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
