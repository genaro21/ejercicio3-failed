const express = require("express");
const routes = require("./routes");
const server = express();

//Settings
server.use(express.json());

//Routes
server.use(routes.admin);
server.use(routes.user);
server.use(routes.anonim);
server.use(routes.libros);

module.exports = server;
