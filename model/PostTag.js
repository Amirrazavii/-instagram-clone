const { sequelize } = require("./index");
const { Sequelize, DataTypes, Model } = require("sequelize");

const PostTag = sequelize.define("PostTag", {
  // No need to define specific attributes for this table
});

module.exports = { PostTag };
