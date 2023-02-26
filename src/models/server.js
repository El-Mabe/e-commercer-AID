const express = require("express");
const cors = require("cors");

const  pool  = require("../../databases/postgres");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;
    this.usuariosPath = "/api/user";
    this.authPath = "/api/auth";

    // this.conectDB();

    this.middlewares();

    this.routes();
  }

//   async conectDB() {
//     await pool;
//   }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usuariosPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
