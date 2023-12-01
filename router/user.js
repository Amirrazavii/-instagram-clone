const express = require("express");
const router = express.Router();
const { User } = require("../model/User");
const { syncDatabase } = require("../database");

router.get("/", (req, res) => {
  res.send("Hello, Sequelize with Express!");
});

// Example route to get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Example route to add a new user
router.post("/users", async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    // await syncDatabase();
    const newUser = await User.create({ firstName, lastName });
    newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
