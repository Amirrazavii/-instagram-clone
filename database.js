const { sequelize } = require("./model");
const { User } = require("./model/User");
const { Post } = require("./model/Posts");
const { FolowerMap } = require("./model/Folower-map");
const { Like } = require("./model/Likes");
const { Comment } = require("./model/Comment");
const { Tag } = require("./model/Tag");
const { PostTag } = require("./model/PostTag");

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
User.hasMany(Like, {
  foreignKey: "userId",
});
Like.belongsTo(User, {
  foreignKey: "userId",
});
User.hasMany(Comment, {
  foreignKey: "userId",
});
Comment.belongsTo(User, {
  foreignKey: "userId",
});

Post.hasMany(Comment, {
  foreignKey: "postId",
});
Comment.belongsTo(Post, {
  foreignKey: "postId",
});

Post.hasMany(Like, {
  foreignKey: "postId",
});
Like.belongsTo(Post, {
  foreignKey: "postId",
});

Tag.belongsToMany(Post, { through: "PostTag" });
Post.belongsToMany(Tag, { through: "PostTag" });
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
