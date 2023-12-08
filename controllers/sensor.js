// controllers/sampleController.js
const Sensor = require("../models/sensor");
const sensor = new Sensor();

const getDataDht = async (req, res) => {
  try {

    const params = req.query;

    const lecturasDht = await sensor.getDataDht(params);
    return res.status(200).json({
      lecturasDht,
    });
  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).send("Error interno del servidor");
  }
};

const createRegisterDht = async (req, res) => {
  try {
    const body = req.body;
    await sensor.createRegisterDht(body);
    return res.status(200).json({
      message: "El registro se creo correctamente",
    });
  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).send("Error interno del servidor");
  }
};

module.exports = { getDataDht, createRegisterDht };
