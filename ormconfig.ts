import { DataSource } from 'typeorm';
import { Moneda } from './entity/Moneda';
import { Nacionalidad } from './entity/Nacionalidad';
import { Province } from './entity/Province';
import { TipoDocumento } from './entity/TipoDocumento';
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
  entities: [Province, Nacionalidad, TipoNacionalidad, Moneda, TipoDocumento],
  subscribers: [],
  migrations: [],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});
