const sequelize = require("./db");
const Sequelize = require("sequelize");
const Financial = require("./finacial.model");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Financial = Financial;

module.exports = db