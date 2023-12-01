const { sequelize } = require("./model");
const { User } = require("./model/User");
const { Post } = require("./model/Posts");

Post.belongsTo(User, {
  foreignKey: "userId",
});
User.hasMany(Post, {
  foreignKey: "userId",
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
