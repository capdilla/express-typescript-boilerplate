require('dotenv').config();

const CONFIG = require('./dbConfig');

module.exports = {
  development: {
    username: CONFIG.username,
    password: CONFIG.password,
    database: CONFIG.database,
    db_port: CONFIG.db_port,
    host: CONFIG.host,
    dialect: CONFIG.dialect,
    operatorsAliases: CONFIG.operatosAliases,
  },
  test: {
    username: CONFIG.username,
    password: CONFIG.password,
    database: CONFIG.database,
    db_port: CONFIG.db_port,
    host: CONFIG.host,
    dialect: CONFIG.dialect,
    operatorsAliases: CONFIG.operatosAliases,
  },
};
