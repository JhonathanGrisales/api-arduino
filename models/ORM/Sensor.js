
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const ReadingsDHT = sequelize.define('lecturas_dht', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha_hora: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  temperatura: {
    type: DataTypes.NUMERIC,
  },
  humedad: {
    type: DataTypes.NUMERIC,
  },
}, {
  tableName: 'lecturas_dht', 
  schema: 'public', 
  timestamps: false
});

module.exports = ReadingsDHT;
