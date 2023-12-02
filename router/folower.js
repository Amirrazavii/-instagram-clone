const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const { Post } = require("../model/Posts");
const { User } = require("../model/User");
const { FolowerMap } = require("../model/Folower-map");

router.post("/follow", async (req, res) => {
  const { userId, targetId } = req.body;
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });
  const folow = await FolowerMap.findOne({
    where: {
      folowerId: userId,
      targetId: targetId,
    },
  });

  if (user != null && folow == null) {
    const createFolower = await FolowerMap.create({
      folowerId: userId,
      targetId: targetId,
    });
    await createFolower.save();
    res.send(createFolower);
  } else {
    res.send("You have already followed");
  }
});
router.delete("/unfollow", async (req, res) => {
  const { userId, targetId } = req.body;
  const folow = await FolowerMap.findOne({
    where: {
      folowerId: userId,
      targetId: targetId,
    },
  });
  if (folow) {
    const deletee = await FolowerMap.destroy({
      where: {
        folowerId: userId,
        targetId: targetId,
      },
    });
    res.send("success delete");
  } else {
    res.send("Erorr");
  }
});
router.get("/listfolower/:userId", async (req, res) => {
  const { userId } = req.params;
  const userr = await User.findOne({
    where: {
      id: userId,
    },
    include: [
      {
        model: FolowerMap,

        include: [
          {
            model: User,
            as: "Folowing",
          },
        ],
      },
    ],
    attributes: ["firstName", "lastName"],
  });
  console.log(userr);
  res.send(userr);
});

module.exports = router;
