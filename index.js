const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const fornecedoresController = require("./fornecedores/FornecedoresController");

const Fornecedor = require("./fornecedores/Fornecedores");
const Produto = require("./produtos/Produtos");

app.set('view engine', 'ejs');

app.use(express.static('public'));

connection
    .authenticate()
    .then(() =>{
        console.log("connected with database");
    }).catch((error) =>{
        console.log(error);
    });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/", fornecedoresController);

app.get("/", (req,res) =>{
    Fornecedor.findAll({
        order:[
            ['id', 'DESC']
        ],
        limit: 5
    }).then(fornecedores =>{
            res.render("index",{fornecedores: fornecedores});
        });
    });


app.listen(8000, (req,res) =>{
    console.log("aplicação rodando");
})