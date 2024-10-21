const Sequelize = require("sequelize");
const connection = require("../database/database");
const Fornecedor = require("../fornecedores/Fornecedores")

const Produto = connection.define('produtos',{
    codigoDeBarras:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    preco:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Fornecedor.hasMany(Produto);
Produto.belongsTo(Fornecedor);

module.exports = Produto;