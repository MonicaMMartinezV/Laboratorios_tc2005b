const http    = require('http');
const express = require('express');
const path    = require('path');
const app     = express();
const fs      = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasformulario = require('./routes/formulario.routes');
app.use('/formulario', rutasformulario);

const rutaslabNew = require('./routes/labNew.routes');
app.use('/labNew', rutaslabNew);

app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("URL index /888");
    response.end(); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);
    response.send('¡Page Not Found!'); //Manda la respuesta
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);
