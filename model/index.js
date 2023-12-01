const { Sequelize } = require("sequelize");
const portdatabase = process.env.portdatabase;
const database = process.env.database;
const myuser = process.env.usernamedatabase;
const mypassword = process.env.password;

const sequelize = new Sequelize(database, myuser, mypassword, {
  host: "localhost",
  port: portdatabase,
  dialect: "postgres",
});
module.exports = { sequelize };
