const ReadingsDHT = require("./ORM/Sensor");

class Sensor {
  async getDataDht(params) {
    try {
      const { page, size } = params;

      const { limit, offset } = getPagination(page, size);

      const results = await ReadingsDHT.findAll({
        limit: 10,
        raw: true,
        order: [["id", "DESC"]],
      });

      const reversedResults = results.reverse();

      return reversedResults;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createRegisterDht(body) {
    try {
      const { temperatura, humedad, distancia, volumen } = body;

      return ReadingsDHT.create({ temperatura, humedad, distancia, volumen});
    } catch (error) {
      throw new Error(error);
    }
  }
}

const getPagination = (page, size) => {
  const limit = size ? size : 10;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};


module.exports = Sensor;
