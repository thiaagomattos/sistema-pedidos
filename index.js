const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const Fornecedor = require("./fornecedores/Fornecedores");
const Produto = require("./produtos/Produtos");

app.set('view engine', 'ejs');

app.get("/", (req,res) =>{
    res.render("index");
});

connection
    .authenticate()
    .then(() =>{
        console.log("connected with database");
    }).catch((error) =>{
        console.log(error);
    });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(8080, (req,res) =>{
    console.log("aplicação rodando");
})