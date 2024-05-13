const model = require("../models/usuarios.model.js")

module.exports.render_login = async (req, res) => {
    res.render('usuarios/login', {
        user: req.cookies.usuario,
        pass: req.cookies.contrasena 
    });
};

module.exports.do_login = async (req, res) => {
    const { user, pass } = req.body;
    const cleanUser = user.trim();
    const cleanPass = pass.trim();
    const usuarioLogueado = model.login(cleanUser, cleanPass);
    if (usuarioLogueado) {
        res.clearCookie('usuario');
        res.clearCookie('contrasena');
        
        res.cookie('usuario', cleanUser, { maxAge: 900000, httpOnly: true });
        res.cookie('contrasena', cleanPass, { maxAge: 900000, httpOnly: true });
        
        res.status(200).json({
            code: 200,
            msg: 'Inicio de sesión correcto'
        });
    } else {
        res.status(401).json({
            code: 401,
            msg: 'Credenciales inválidas'
        });
    }
};
