import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'seu_usuario',
  password: process.env.DB_PASS || 'sua_senha',
  database: 'bardo_budget',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

export = config;
