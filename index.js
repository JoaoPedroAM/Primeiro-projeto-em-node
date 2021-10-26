const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta")
//database

connection
    .authenticate()
    .then(()=> {
        console.log("Conexão com o banco deu certo");
    })
    .catch((msgErro)=> {

        console.log(msgErro);
    })


//Utilizando o ejs como View engine
app.set("view engine", "ejs");
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  //Buscando e mostrando os itens do banco de dados
  Pergunta.findAll({raw: true}).then(pergunta =>{
    res.render("index",{
      pergunta: pergunta
    
    });

  })
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});






app.post("/salvarpergunta", (req, res) => {

  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(()=> {
    res.redirect("/")
  });
});





app.listen(8000, () => {
  console.log("Server rodando");
});