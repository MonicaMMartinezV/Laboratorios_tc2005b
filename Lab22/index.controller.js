const path = require('path');
const multer = require('multer');
const fs = require('fs');

module.exports.edit_file = async (req, res) => {
    const existingFileName = req.body.existingFile;
    const newFile = req.file;

    // Verifica si se seleccionó un archivo existente y se cargó un nuevo archivo
    if (existingFileName && newFile) {
        // Ruta del archivo existente
        const existingFilePath = path.join(__dirname, 'public', existingFileName);
        
        // Ruta del nuevo archivo
        const newFilePath = path.join(__dirname, 'public', newFile.filename);
        
        // Lee el archivo existente
        fs.readFile(existingFilePath, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ code: 500, msg: "Error reading existing file" });
            }

            // Escribe el nuevo archivo
            fs.writeFile(existingFilePath, data, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ code: 500, msg: "Error writing new file" });
                }

                // Envía la respuesta si todo salió bien
                res.status(200).json({ code: 200, msg: "File edited successfully" });
            });
        });
    } else {
        res.status(400).json({ code: 400, msg: "Please select an existing file and upload a new file" });
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).array('file', 1);

module.exports.upload_file = async (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ code: 500, msg: "Error uploading file" });
        }

        console.log("Upload Successful:", req.files); // Log uploaded files
        res.status(200).json({ code: 200, msg: "Ok" });
    });
};

const storage2 = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './private/');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
    
const upload2 = multer({ storage: storage2 }).array('file', 1);

module.exports.upload_file_private = async (req, res) => {
    console.log("Cargando el archivo");
    upload2(req, res, function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ code: 500, msg: "Error uploading file" });
        }
    
        console.log("Upload Successful:", req.files); // Log uploaded files
        res.status(200).json({ code: 200, msg: "Ok" });
    });
};

module.exports.get_private_file = async(req, res) => {
    var fileName = req.params.file;
    res.sendFile(path.join(__dirname, './private', fileName));
};
