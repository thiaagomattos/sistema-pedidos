const { time } = require("console");
const Sequelize = require("sequelize");

const connection = new Sequelize('sistema_padaria', 'root', '123456',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-03:00'
});

module.exports = connection;
