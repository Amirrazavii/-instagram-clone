const { sequelize } = require("./index");
const { Sequelize, DataTypes, Model } = require("sequelize");

const { User } = require("./User.js");

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.BIGINT,
  },
});

// Post.belongsTo(User, {
//   foreignKey: "userId",
// });

module.exports = { Post };
