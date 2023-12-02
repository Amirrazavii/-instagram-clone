const express = require("express");
const { Comment } = require("../model/Comment");
const router = express.Router();
router.post("/comment", async (req, res) => {
  const { postId, userId, content } = req.body;

  const commentCreate = await Comment.create({
    postId: postId,
    userId: userId,
    content: content,
  });
  res.send(commentCreate);
});
router.delete("/comment", async (req, res) => {
  const { postId, userId } = req.body;
  const commentdestroy = await Comment.destroy({
    where: {
      postId: postId,
      userId: userId,
    },
  });
  res.send("success delete");
});

router.get("/commentAll", async (req, res) => {
  const { postId } = req.body;
  const comments = await Comment.findAll({
    where: {
      postId: postId,
    },
  });
  res.send(comments);
});
module.exports = router;
