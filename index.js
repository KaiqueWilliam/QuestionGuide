const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta")

//Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexao feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

// Dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));

// traduzir dados para uma estrutura JS
app.use(bodyParser.urlencoded ({extended: false}))

// ler dados de formulario via json (API)
app.use(bodyParser.json());

            // ROTAS 

// abrindo rota para destino principal
app.get("/",(req, res) => { 
    Pergunta.findAll({raw: true, order: [
        ['id','DESC'] //DESC decrescente/ ASC Crescente
    ]}).then(perguntas =>{
        res.render("index",{
            perguntas: perguntas
        });
    });  
});

// abrindo rota para destino PERGUNTAR
app.get("/perguntar",(req, res) => {
    res.render("perguntar");
});

// abrindo uma rota POST para "camuflar" dados enviados no formulario
app.post("/salvarpergunta",(req,res) => {
    //variaveis para armazenare as req do usuario
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    // Colocando os dados do usuario dentro da tabela do banco de dados
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
        // redirecionando o usuario para pagina principal depois de passar informacoes
    }).then(() => {
        res.redirect("/");
    });
});

app.get("/pergunta/:id", (req,res) => {
    let id = req.params.id;
    Pergunta.findOne ({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined) {

            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [
                    ['id','DESC']
                ]
            }).then(respostas => {
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
        } else {
            res.redirect("/");
        }
    });
})

app.post("/responder",(req,res) => {
    let corpo = req.body.corpo;
    let perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId);
    });
});
// abrir uma porta host
app.listen(1313,() => {console.log("App rodando!");});