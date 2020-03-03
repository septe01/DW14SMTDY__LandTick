"use strict";
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define(
    "ticket",
    {
      name_train: DataTypes.STRING,
      type_train: DataTypes.INTEGER,
      date_start: DataTypes.DATE,
      start_station: DataTypes.STRING,
      start_time: DataTypes.TIME,
      destination_station: DataTypes.STRING,
      arival_time: DataTypes.TIME,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  ticket.associate = function(models) {
    // associations can be defined here
    ticket.belongsTo(models.train, {
      foreignKey: "type_train"
    });
  };
  return ticket;
};
