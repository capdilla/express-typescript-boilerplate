import { Sequelize } from 'sequelize-typescript';

import config from '../../config/dbConfig';

const CONFIG = config as any;

const sequelize = new Sequelize({
  database: CONFIG.database,
  username: CONFIG.username,
  password: CONFIG.password,
  host: CONFIG.host,
  dialect: CONFIG.dialect,
  port: CONFIG.db_port,
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000,
  // },
  logging: true,
  models: [__dirname + '/*.model.ts'],
});

export default sequelize;
