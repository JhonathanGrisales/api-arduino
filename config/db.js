// db.js
const { Sequelize } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config.development);

// Prueba de conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

testConnection();

module.exports = sequelize;
