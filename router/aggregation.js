const express = require("express");
const router = express.Router();
const { sequelize } = require("../model/index");
const { Post } = require("../model/Posts");
const { User } = require("../model/User");
const { Op } = require("sequelize");
const { Like } = require("../model/Likes");
const { Comment } = router.get("/count", async (req, res) => {
  const arr = await User.findAll({
    attributes: [
      "firstName",
      [sequelize.fn("COUNT", sequelize.col("firstName")), "n_price"],
    ],
    group: ["firstname"],
  });
  res.send(arr);
});
router.get("/groupby", async (req, res) => {
  const arr = await Post.findAll({
    attributes: [
      "userId",
      [sequelize.fn("COUNT", sequelize.col("title")), "c-userPost"],
    ],
    group: ["userId"],
  });

  res.send(arr);
});

module.exports = router;
