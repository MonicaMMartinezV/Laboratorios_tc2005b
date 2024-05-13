const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/form_method', (request, response, next) => {
    response.render('formulario');


});

router.post('/form_method', (request, response, next) => {
    const indice = Number(request.body.indice);
    const imprimir = request.body.imprimir;

    // Renderizamos la vista 'datosFormulario.ejs' y pasamos los datos del formulario como variables
    response.render('resultados', { indice: indice, imprimir: imprimir });
});


module.exports = router;