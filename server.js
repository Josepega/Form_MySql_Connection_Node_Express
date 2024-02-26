const express = require('express');
const mysql = require('mysql');

const server = express();
const port = 3030;
const cors = require("cors");

server.use(express.json());
server.use(cors());

server.get ('/saludo', (req, res) => {
res.send('Hello World');
});

server.listen (port,() =>{
console.log('Servidor corriendo en el puerto ' + port);
});

server.post ('/conexion', (req, res) => {
    try {
        const datos = req.body;
        const connection = mysql.createConnection({
            host: datos.host,
            user: datos.user,
            password: datos.pass,
            database: datos.database
        });

        connection.connect((err) => {
            if (err) {
              res.json("Error con la conexion a BDD");  
            } else
                res.json("Exito con la conexion a BDD"); 
        });
    } catch (error) {
        res.json("Error de conexion con el SERVIDOR de");
        
    }
});