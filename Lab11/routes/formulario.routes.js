const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/form_method', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './../form.html'), 'utf8')
    response.write(html);
    response.end();  
});

router.post('/form_method', (request, response, next) => {
    const indice = Number(request.body.indice);
    console.log(indice);
    const imprimir = request.body.imprimir
    // Guardar los datos en un archivo de texto
    fs.appendFile('datos.txt', `${indice}: ${imprimir}\n`, (err) => {
        if (err) {
            console.error('Error al guardar los datos:', err);
            return response.status(500).send('Error interno del servidor');
        }
        console.log('Datos guardados correctamente');
        response.status(200).send('Datos guardados correctamente');
    });
});


module.exports = router;