require("dotenv").config();
const express = require("express");
const userroute = require("./router/user.js");
const postroute = require("./router/post.js");
const swaggerUi = require("swagger-ui-express");
const { syncDatabase } = require("./database");
syncDatabase();
const app = express();

app.use(express.json());
app.use("/api", userroute);
app.use("/api", postroute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
