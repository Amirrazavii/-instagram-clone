const express = require("express");
const { Tag } = require("../model/Tag");
const { PostTag } = require("../model/PostTag");
const { Post } = require("../model/Posts");
const router = express.Router();

router.post("/tag", async (req, res) => {
  const { name } = req.body;
  const checkAlreadyTag = await Tag.findOne({
    where: {
      name: name,
    },
  });
  if (!checkAlreadyTag) {
    const nameCreate = await Tag.create({
      name: name,
    });
    res.send(nameCreate);
  } else {
    res.send("Already tag");
  }
});

router.post("/tagpost", async (req, res) => {
  const { postId, tagsId } = req.body;
  const arr = [];
  for (const element of tagsId) {
    console.log(element);
    const posttag = await PostTag.create({
      PostId: postId,
      TagId: element,
    });
    await posttag.save();
    arr.push(posttag);
  }
  res.send(arr);
});
router.get("/tagpost", async (req, res) => {
  const postTag = await Post.findOne({
    where: {
      id: 1,
    },
    include: {
      model: Tag,
      through: {
        model: PostTag,
        attributes: [], // To exclude join table attributes from the result
      },
    },
  });
  res.send(postTag);
});
module.exports = router;
