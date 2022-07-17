const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { db } = require('../db/connection');
const routerUsuario = require('../routes/usuarios.routes');
const routerRol = require('../routes/roles.routes');



class Server {
    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.apiPath = {
            usuarios: '/seguridad/usuarios',
            roles: '/seguridad/roles'
        }

        this.dbConnetion();
        this.middlewares();
        this.routes()
    }

    async dbConnetion () {
        try {
            await db.authenticate();
            console.log('Database Online');
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

    middlewares () {
        //Cors
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta Public
        this.app.use(express.static('public'));
    }

    routes () {
        this.app.use(this.apiPath.usuarios, routerUsuario)  //Usuarios
        this.app.use(this.apiPath.roles, routerRol)     //Roles
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
}

module.exports = Server;