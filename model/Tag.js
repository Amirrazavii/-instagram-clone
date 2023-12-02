const { sequelize } = require("./index");
const { Sequelize, DataTypes, Model } = require("sequelize");

const Tag = sequelize.define("Tag", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = { Tag };
