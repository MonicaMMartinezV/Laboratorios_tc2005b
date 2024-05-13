const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Agrega esta línea para importar el módulo fs
const app = express();
const port = 5000;
const log = console.log

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Define Multer file storage configuration
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, uploadDir);
    },
    filename: (request, file, callback) => {
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

// Define file filter function
const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' || 
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg') {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

// Register Multer middleware with storage and file filter configuration
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo'));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const controller = require("./index.controller.js"); // Asegúrate de importar el controlador

app.get('/get_private_file/:file', controller.get_private_file);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).single('file');

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('Archivo subido correctamente');
    });
});

app.post('/create_file', (req, res) => {
    const { fileName, content } = req.body;

    if (!fileName || !content) {
        return res.status(400).send('Por favor, proporcione un nombre de archivo y un contenido.');
    }

    const filePath = path.join(__dirname, 'public', fileName);

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al crear el archivo.');
        }
        res.status(200).send('Archivo creado correctamente.');
    });
});


app.post('/upload_file_private', controller.upload_file_private);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
