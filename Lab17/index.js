const http    = require('http');
const express = require('express');
const path    = require('path');
const app     = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.set('view engine', 'ejs'); 
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/*Lab 17: Interacción con la base de datos*/
const mariadb = require("mariadb");
const pool = mariadb.createPool({
host:"127.0.0.1",
user:"root",
password:"1002151513",
database: "test",
connectionLimit:5,
port:3308
});

app.get('/', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hola mundo");
    response.end(); 
});

app.get('/test_ejs', async(request, response, next) => {
    response.render('usuarios/login');
});

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

/*Lab 14: Manejo de sesiones y cookies*/ 
app.get('/test_cookie', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Set-Cookie', 'mi_cookie=123; HttpOnly');
    response.send("Hola Mundo");
    response.end(); 
});

app.get('/test_value_cookie', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.cookies.mi_cookie);
    response.end(); 
});

app.get('/test_session', async(request, response, next) => {
    request.session.mi_variable = "valor"
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});

app.get('/test_session_variable', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});

app.get('/logout', async(request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
});


/*Lab 17: Interacción con la base de datos*/
app.get('/add_book', (req, res) => {
    res.render('add_book');
});


app.get('/test_db', async(request, response, next) => {
    let conn;

    try{
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM books")
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        response.writeHead(200, {'Content-type':'text/html'});
        response.end(jsonS);
    }catch(e){
        console.log(e)
    }
});

app.get('/books', async (req, res) => {
    let conn;

    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM books");
        res.render('books', { books: rows });
    } catch (error) {
        console.error("Error al obtener libros:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    } finally {
        if (conn) conn.release(); // liberar la conexión
    }
});

app.get('/book/:id', async (req, res) => {
    const bookId = req.params.id;
    let conn;

    try {
        conn = await pool.getConnection();
        const [row] = await conn.query("SELECT * FROM books WHERE BookID = ?", [bookId]);
        res.render('book', { book: row });
    } catch (error) {
        console.error("Error al obtener el libro:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    } finally {
        if (conn) conn.release(); // liberar la conexión
    }
});


app.post('/add_book', async (req, res) => {
    const { title } = req.body;
    let conn;

    try {
        // Aquí puedes agregar lógica para obtener automáticamente los valores de los campos "ID de la Serie" y "ID del Autor"
        const seriesID = 1; // Valor predeterminado o lógica para obtener el ID de la serie
        const authorID = 1; // Valor predeterminado o lógica para obtener el ID del autor

        conn = await pool.getConnection();
        await conn.query("INSERT INTO books (Title, SeriesID, AuthorID) VALUES (?, ?, ?)", [title, seriesID, authorID]);
        res.send("Libro agregado correctamente");
    } catch (error) {
        console.error("Error al agregar el libro:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    } finally {
        if (conn) conn.release(); // liberar la conexión
    }
});


app.get('/edit_book/:id', async (req, res) => {
    const bookId = req.params.id;
    let conn;

    try {
        conn = await pool.getConnection();
        const [row] = await conn.query("SELECT * FROM books WHERE BookID = ?", [bookId]);
        if (!row) {
            res.status(404).send("Libro no encontrado");
            return;
        }
        res.render('edit_book', { book: row });
    } catch (error) {
        console.error("Error al obtener el libro:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    } finally {
        if (conn) conn.release(); // liberar la conexión
    }
});

app.post('/edit_book/:id', async (req, res) => {
    const bookId = req.params.id;
    const { title } = req.body;
    let conn;

    try {
        conn = await pool.getConnection();
        await conn.query("UPDATE books SET Title = ? WHERE BookID = ?", [title, bookId]);
        res.send("Libro editado correctamente");
    } catch (error) {
        console.error("Error al editar el libro:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    } finally {
        if (conn) conn.release(); // liberar la conexión
    }
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);