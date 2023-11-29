const ReadingsDHT = require("./ORM/Sensor");

class Sensor {
  async getDataDht() {
    try {
      return await ReadingsDHT.findAll({ raw: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createRegisterDht(body) {
    try {
      const { temperatura, humedad } = body;

      return ReadingsDHT.create({ temperatura, humedad });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Sensor;
