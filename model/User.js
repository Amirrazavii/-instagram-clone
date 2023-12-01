const { sequelize } = require("./index");
const { Sequelize, DataTypes } = require("sequelize");
// const { Post } = require("./Post");
const { Post } = require("./Posts");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// User.hasMany(Post, {
//   foreignKey: "userId",
// });

module.exports = { User };
