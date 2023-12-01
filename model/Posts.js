const { sequelize } = require("./index");
const { Sequelize, DataTypes, Model } = require("sequelize");

const { User } = require("./User.js");
const { populate } = require("dotenv");

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // userId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: User,
  //     key: "userId",
  //   },
  // },
});

// Post.belongsTo(User, {
//   foreignKey: "userId",
// });

module.exports = { Post };
