require('dotenv').config();

const database =
  process.env.ENV === 'test' ? process.env.BOILER_TEST : process.env.DATABASE;

let CONFIG = {
  env: process.env.ENV || 'development',
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database,
  host: process.env.HOST || 'localhost',
  db_port: process.env.DB_PORT || 5432,
  dialect: process.env.DIALECT,
  operatosAliases: process.env.operatosAliases || false,
};

// a rellenar según proyecto

// if (CONFIG.env === 'development') {
//   CONFIG.username = process.env.DB_USERNAME || 'XXXXX';
//   CONFIG.password = process.env.PASSWORD || 'XXXXX';
//   CONFIG.database = process.env.DATABASE || 'XXXXX';
//   CONFIG.host = process.env.HOST || 'XXXXX';
//   CONFIG.db_port = process.env.DB_PORT || 'XXXXX';
//   CONFIG.dialect = process.env.DIALECT || 'XXXXX';
//   CONFIG.operatosAliases = process.env.operatosAliases || false;
// }
// if (CONFIG.env === 'test') {
//   CONFIG.username = process.env.DB_USERNAME || 'XXXXX';
//   CONFIG.password = process.env.PASSWORD || 'XXXXX';
//   CONFIG.database = process.env.DATABASE || 'XXXXX';
//   CONFIG.host = process.env.HOST || 'XXXXX';
//   CONFIG.db_port = process.env.DB_PORT || 'XXXXX';
//   CONFIG.dialect = process.env.DIALECT || 'XXXXX';
//   CONFIG.operatosAliases = process.env.operatosAliases || false;
// }
// if (CONFIG.env == 'unit_test') {
//   CONFIG.username = process.env.DB_USERNAME || 'XXXXX';
//   CONFIG.password = process.env.PASSWORD || 'XXXXX';
//   CONFIG.database = process.env.DATABASE || 'XXXXX';
//   CONFIG.host = process.env.HOST || 'XXXXX';
//   CONFIG.db_port = process.env.DB_PORT || 'XXXXX';
//   CONFIG.dialect = process.env.DIALECT || 'XXXXX';
//   CONFIG.operatosAliases = process.env.operatosAliases || false;
// }
// if (CONFIG.env == 'prod') {
//   CONFIG.username = process.env.DB_USERNAME || 'XXXXX';
//   CONFIG.password = process.env.PASSWORD || 'XXXXX';
//   CONFIG.database = process.env.DATABASE || 'XXXXX';
//   CONFIG.host = process.env.HOST || 'XXXXX';
//   CONFIG.db_port = process.env.DB_PORT || 'XXXXX';
//   CONFIG.dialect = process.env.DIALECT || 'XXXXX';
//   CONFIG.operatosAliases = process.env.operatosAliases || false;
// }
console.log(CONFIG);

module.exports = CONFIG;
