const Sequelize = require("sequelize");
const connection = require("../database/database");

const Fornecedor = connection.define('fornecedores',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    contato:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
});


module.exports = Fornecedor;