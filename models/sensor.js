const ReadingsDHT = require("./ORM/Sensor");

class Sensor {
  async getDataDht(params) {
    try {
      const { page, size } = params;

      const { limit, offset } = getPagination(page, size);

      return await ReadingsDHT.findAll({
        offset: offset,
        limit: limit < 100 ? limit : 100,
        raw: true,
      });
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

const getPagination = (page, size) => {
  const limit = size ? size : 10;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};


module.exports = Sensor;
