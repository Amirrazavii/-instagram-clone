const { sequelize } = require("./index");
const { Sequelize, DataTypes, Model } = require("sequelize");

const { User } = require("./User.js");

const FolowerMap = sequelize.define("FolowerMap", {});

module.exports = { FolowerMap };
