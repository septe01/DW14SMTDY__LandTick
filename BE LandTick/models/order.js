"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      id_ticket: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      status: DataTypes.ENUM({
        values: ["a", "c", "p"]
      }),
      attachment: DataTypes.STRING
    },
    {}
  );
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.user, {
      foreignKey: "id_user"
    });
    order.belongsTo(models.ticket, {
      foreignKey: "id_ticket"
    });
  };
  return order;
};
