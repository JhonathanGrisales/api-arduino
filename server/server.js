// server/server.js
const express = require("express");
const cors = require("cors");
const routes = require("../routes");
const sequelize = require("../config/db");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// Agregar un middleware global para manejar la conexión a la base de datos
app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
    next();
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Agregar las rutas
app.use("/api", routes);

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
