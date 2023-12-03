const express = require("express");
const router = express.Router();
const { Post } = require("../model/Posts");
const { User } = require("../model/User");

// Example route to get all users
router.get("/Posts", async (req, res) => {
  try {
    const users = await Post.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Example route to add a new user
router.post("/posts", async (req, res) => {
  const { title, content, price, userId } = req.body;

  try {
    // await syncDatabase();
    const newPost = await Post.create({
      title: title,
      content: content,
      price: price,
      userId: userId,
    });
    newPost.save();
    res.json(newPost);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/userwithpost", async (req, res) => {
  const usersWithPosts = await User.findAll({
    include: [
      {
        model: Post,
        // as: "posts", // This should match the alias defined in the model associations
      },
    ],
  });
  res.json(usersWithPosts);
});
router.get("/postwithuser", async (req, res) => {
  const postwithuser = await Post.findAll({
    include: [
      {
        model: User,
        // as: "posts", // This should match the alias defined in the model associations
      },
    ],
  });
  res.json(postwithuser);
});

module.exports = router;
