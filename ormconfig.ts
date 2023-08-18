import { DataSource } from 'typeorm';
import { Nacionalidad } from './entity/Nacionalidad';
import { Province } from './entity/Province';
import { TipoNacionalidad } from './entity/TipoNacionalidad';

export const AppDataSource = new DataSource({
  type: 'mysql',
  //url : process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
  synchronize: true,
  logging: false,
  entities: [Province, Nacionalidad, TipoNacionalidad],
  subscribers: [],
  migrations: [],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});
