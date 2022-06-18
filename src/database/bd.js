const Sequelize = require("sequelize");
const connection = new Sequelize(
  process.env.BD_BASE,
  process.env.BD_USER,
  process.env.BD_PASS,
  {
    host: process.env.BD_HOST,
    port: 5432,
    dialect: "postgres",
  }
);

module.exports = connection;