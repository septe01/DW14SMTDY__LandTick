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
      "users",
      [
        {
          name: "septe habudin",
          user_name: "septe",
          email: "septe@gmail.com",
          password: "123456",
          gender: "male",
          phone: "0812 1322 1235",
          address: "Kp. Pabuaran No.26 Rt.03 Rw.953",
          role: "admin",
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          name: "habudin septe",
          user_name: "habudin",
          email: "habudin@gmail.com",
          password: "123456",
          gender: "male",
          phone: "0812 1322 1235",
          address: "Parung No.26 Rt.03 Rw.953",
          role: null,
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          name: "septe stia",
          user_name: "stia",
          email: "stia@gmail.com",
          password: "123456",
          gender: "male",
          phone: "0812 0000 5634",
          address: "Ciseeng No.26 Rt.03 Rw.953",
          role: null,
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        }

        // ,
        // {
        //   breeder: "habudin",
        //   email: "habudin@gmail.com",
        //   password: "123456",
        //   phone: "0812 1322 1235",
        //   address: "Kp. Pabuaran No.26 Rt.03 Rw.953",
        //   createdAt: "0000-00-00",
        //   updatedAt: "0000-00-00"
        // },
        // {
        //   breeder: "stia",
        //   email: "stia@gmail.com",
        //   password: "123456",
        //   phone: "0812 1322 1235",
        //   address: "Kp. Pabuaran No.26 Rt.03 Rw.953",
        //   createdAt: "0000-00-00",
        //   updatedAt: "0000-00-00"
        // }
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
    return queryInterface.bulkDelete("users", null, {});
  }
};
