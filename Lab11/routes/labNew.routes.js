const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/pregunta', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Archivo JSON</title>
    </head>
    <body>
        <h1>Archivo JSON</h1>
        <p>Un archivo JSON es un formato de texto simple para el intercambio de datos. Es utilizado comúnmente para transmitir datos entre un servidor y un cliente en aplicaciones web. Está compuesto por pares de clave-valor y se asemeja mucho a la sintaxis de los objetos en JavaScript. Esto lo hace ideal para representar datos estructurados, como configuraciones, información de usuario, resultados de consultas de bases de datos, entre otros.</p>
    </body>
    </html>
    `);
    response.end();
});

router.get('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok GET"});
});

router.post('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok POST"}); 
});

router.get('/test_html', (request, response, next) => {
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

router.get('/password', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './../passW.html'), 'utf8')
    response.write(html);
    response.end();  
});

router.post('/password', (request, response, next) => {
    const password = request.body.password;
    console.log(password);
    const confirmPassword = request.body.confirmPassword
    console.log(confirmPassword);
});

router.get('/tiendaEnLinea', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './../tiendaEnLinea.html'), 'utf8')
    response.write(html);
    response.end();  
});

module.exports = router;