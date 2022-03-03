// requires dependencias
const express = require("express");
const router = require("./email.routes");

// instancia de objetos
const app = express();

app.use(router);

module.exports = app;
