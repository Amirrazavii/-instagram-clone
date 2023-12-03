require("dotenv").config();
const express = require("express");
const userroute = require("./router/user.js");
const postroute = require("./router/post.js");
const folowroute = require("./router/folower.js");
const likeroute = require("./router/like.js");
const commentroute = require("./router/comment.js");
const tagrouter = require("./router/tag.js");
const aggregate = require("./router/aggregation.js");
const { syncDatabase } = require("./database");
syncDatabase();
const app = express();

app.use(express.json());
app.use("/api", userroute);
app.use("/api", postroute);
app.use("/api", folowroute);
app.use("/api", likeroute);
app.use("/api", commentroute);
app.use("/api", tagrouter);
app.use("/api", aggregate);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
