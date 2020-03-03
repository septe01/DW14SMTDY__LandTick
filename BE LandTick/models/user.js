"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      user_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.ENUM({
        values: ["male", "female"]
      }),
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
    // user.hasMany(models.pet, {
    //   foreignKey: "user_id"
    // });
  };
  return user;
};
