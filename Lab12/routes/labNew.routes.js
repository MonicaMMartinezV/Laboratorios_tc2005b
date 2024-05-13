const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/pregunta', (request, response, next) => {
    response.render('pregunta');
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
    response.render('test_html');
});

router.get('/password', (request, response, next) => {
    response.render('password');
});

router.post('/password', (request, response, next) => {
    const password = request.body.password;
    console.log(password);
    const confirmPassword = request.body.confirmPassword
    console.log(confirmPassword);
    response.redirect('/labNew/tiendaEnLinea');
});

router.get('/tiendaEnLinea', (request, response, next) => {
    response.render('tiendaEnLinea');
});


module.exports = router;