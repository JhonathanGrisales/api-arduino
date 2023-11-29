// routes/index.js
const express = require("express");
const router = express.Router();

const { getDataDht, createRegisterDht } = require("../controllers/sensor");

router.get("/readings-dht", getDataDht);

router.post("/create-register", createRegisterDht);

module.exports = router;
