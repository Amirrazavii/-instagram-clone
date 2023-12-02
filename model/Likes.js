const { sequelize } = require("./index");
const { Sequelize, DataTypes, Model } = require("sequelize");

const Like = sequelize.define("Like", {});

module.exports = { Like };
