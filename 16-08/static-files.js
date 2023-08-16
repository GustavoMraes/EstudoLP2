const express = require ('express');

//criar um servidor chamando a fn express()
const app = express();
const path = require('path');

//middleware - static files
app.use(express.static('public'));
//navegador --> express -> middleware --> fn home


//site.com.br/produtos?cor=azul&tamanho=m&preco=>100


function home(req, res) {
    const caminho = path.join(__dirname,  'pages', 'home.html')
    res.sendFile(caminho);
}

//localhost:3001/contato?tipo=formulario
//localhost:3001/contato?tipo=texto
//localhost:3001/contato      -> texto
function contato(req, res) {
   const tipo = req.query.tipo;


   if (tipo === 'formulario') {
        res.sendFile(path.join(__dirname,  'pages', 'contato-form.html'));
   } else{
    res.sendFile(path.join(__dirname,  'pages', 'contato-texto.html'));
   }
    
}
const produtos = [
    'Banana',
    'Coca-cola',
    'Macarrão',
    'Uva'
];

function produto(req, res) {
const id = req.query.id;

if (id < 0 ||id >= produtos.length) {
    res.status(404);
    res.send("Produto não encontrado");
    return;
}

res.send(produtos[id]); 
}

//configurar rotas
app.get('/', home);
app.get('/contato', contato);
app.get('/produto', produto);



app.listen(3001, () => console.log('Rodando na porta 3001'));


