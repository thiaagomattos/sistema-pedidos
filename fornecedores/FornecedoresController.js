const express = require("express");
const router = express.Router();
const Fornecedor = require("./Fornecedores");

router.get("/fornecedores/novo", (req,res) =>{
    res.render("fornecedores/novo");
});

router.post("/fornecedores/salvar", (req,res) =>{
    var nome = req.body.nome;
    var contato = req.body.contato;
    if(nome != undefined){
        
        Fornecedor.create({
            nome: nome,
            contato: contato
        }).then(() =>{
            console.log(contato)
            res.redirect("/fornecedores");
        });
        

    }else{
        res.redirect("fornecedores/novo");
    }
});

router.get("/fornecedores", (req,res) =>{

    Fornecedor.findAll().then(fornecedores =>{
        res.render("fornecedores/index", {fornecedores: fornecedores});
    });
});


module.exports = router;