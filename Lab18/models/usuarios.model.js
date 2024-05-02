
const db     = require('../utils/database.js');
const bcrypt = require('bcryptjs');

exports.login = function(correo,contrasena){
    return {
        nombre:"Samuel",
        id:1,
        activo:true
    };
}

module.exports = class User {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(my_username, my_name, my_password) {
        this.username = my_username;
        this.name = my_name;
        this.password = my_password;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    async save() {
        try {
            const connection = await db();
            const hashedPass = await bcrypt.hash(this.password, 12)
            const result = await connection.execute(
            `INSERT INTO users (username, name, password) VALUES (?, ?, ?)`,
            [this.username, this.name, hashedPass]
            );
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }
    //Este método servirá para buscar un usuario por username
    //Es estático ya que a diferencia de save(), el primero se guarda al crear un usuario siempre, pero en este segundo podmeos buscar un usuario sin crear un nuevo objeto usuario.
    static async findUser(username) {
        try {
            const connection = await db();
            const result = await connection.execute('Select * from users WHERE username = ?', [username]);
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }
}

module.exports.get_logged = async(req,res) =>{
    try {
        const usuarios = await model.User.findUser(req.session.username)
        if(usuarios.length < 1){
            res.render("usuarios/registro",{
                registro: false
            });
            return;
        }

        const usuario = usuarios[0];
        res.render('usuarios/logged',{
            user:usuario
        });
    }catch (error){
        res.render("usuarios/registro",{
            registro: false
        });
    }
}
