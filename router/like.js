const express = require("express");
const { Like } = require("../model/Likes");
const { Comment } = require("../model/Comment");
const { Post } = require("../model/Posts");
const router = express.Router();

router.post("/like", async (req, res) => {
  const { userId, postId } = req.body;
  const checkAlreadyLike = await Like.findOne({
    where: {
      postId: postId,
      userId: userId,
    },
  });
  if (!checkAlreadyLike) {
    const likerCreate = await Like.create({
      postId: postId,
      userId: userId,
    });
    res.send(likerCreate);
  } else {
    res.send("Already like");
  }
});
router.delete("/unlike", async (req, res) => {
  const { userId, postId } = req.body;
  const deleted = await Like.destroy({
    where: {
      postId: postId,
      userId: userId,
    },
  });
  console.log(deleted);
  res.send("seccuss delete");
});
router.get("/likeAll", async (req, res) => {
  const { postId } = req.body;
  const likes = await Like.findAll({
    where: {
      postId: postId,
    },
  });
  res.send(likes);
});
module.exports = router;
