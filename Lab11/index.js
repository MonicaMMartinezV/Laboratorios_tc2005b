const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutasFormulario = require('./routes/formulario.routes');
app.use('/formulario', rutasFormulario);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);
    response.send('¡Page Not Found!'); //Manda la respuesta
});

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("URL index /");
    response.end(); 
});

app.get('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok GET"});
    response.end();  
});

app.post('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok POST"});
    response.end();  
});

app.get('/test_html', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');    
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Código en HTML</title>
        </head>
        <body>
            <h1>hola mundo desde express</h1>
        </body>
        </html>
    `);
    response.end(); 
});

app.get('/form_method', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './form.html'), 'utf8')
    response.write(html);
    response.end();  
});

app.post('/form_method', (request, response, next) => {
    const indice = Number(request.body.indice);
    console.log(indice);
    const imprimir = request.body.imprimir
    console.log(imprimir);

    for(var i = 1; i <= indice; i++){
        console.log(imprimir)
    }

    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write('{code:200, msg:"Ok POST"}');
    response.end(); 
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);
