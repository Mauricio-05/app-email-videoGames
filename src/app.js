// requires dependencias
const express = require("express");
const morgan = require("morgan");

// require funciones creadas
const { errorCreate, errorHandler } = require("./middlewares/middlewaresApp");

// Inicializar express objeto
const app = express();

// Configuracion express

// Recibir datos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Variables express
app.set("port", process.env.PORT || 5000);

// logger peticiones
app.use(morgan("dev"));

// config routes express
app.use("/apiV1", require("./routes/index.routes"));

// middlewares app express

// errors
app.use(errorCreate);
app.use(errorHandler);

// Listen server
const init = () => {
  app.listen(app.get("port"));
  console.log(`Servidor encendido en el puerto ${app.get("port")}`);
};

init();
