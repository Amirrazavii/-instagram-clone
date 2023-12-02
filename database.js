const { sequelize } = require("./model");
const { User } = require("./model/User");
const { Post } = require("./model/Posts");
const { FolowerMap } = require("./model/Folower-map");

Post.belongsTo(User, {
  foreignKey: "userId",
});
User.hasMany(Post, {
  foreignKey: "userId",
});

FolowerMap.belongsTo(User, {
  foreignKey: "folowerId",
  as: "self", //return selfUser
});
FolowerMap.belongsTo(User, {
  foreignKey: "targetId",
  as: "Folowing",
});
User.hasMany(FolowerMap, {
  foreignKey: "targetId",
});
User.hasMany(FolowerMap, {
  foreignKey: "folowerId",
});

async function syncDatabase() {
  try {
    // sequelize.authenticate().then(async () => {
    //   await User.sync({ force: true });
    //   await Post.sync({ force: true });
    // });
    await sequelize.sync(); // This will drop the table if it exists
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

module.exports = { syncDatabase };
