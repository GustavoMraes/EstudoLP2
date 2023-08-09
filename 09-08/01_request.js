const express = require("express");
const app = express();

//funções para lidar com a quest e response

function home(req, res) {
    res.status(200);
    res.send("Home Page");
}

// 100 - info
// 200 - sucesso
// 300 - redirect
// 400 - erro (cliente)
// 500 - erro (server)

function principal (req, res){
    res.status(301);
    res.header("Location", "/");
    res.send();
}

//rotas
app.get("/", home);
app.get("/principal", principal);





app.listen(3001, () => console.log("Rodando na porta 3001"));


