'use strict';
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define('train', {
    type_train: DataTypes.STRING
  }, {});
  train.associate = function(models) {
    // associations can be defined here
  };
  return train;
};