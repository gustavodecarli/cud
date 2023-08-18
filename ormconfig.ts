import { DataSource } from 'typeorm';
import { Nacionalidad } from './entity/Nacionalidad';
import { Province } from './entity/Province';
import { TipoNacionalidad } from './entity/TipoNacionalidad';

export const AppDataSource = new DataSource({
  type: 'mysql',
  //url : process.env.DATABASE_URL,
  host: '200.10.108.134',
  //url: 'mysql://root:!Cl4v301@200.10.108.134/cud?useSSL=false',
  port: 3306,
  database: 'cud',
  username: 'root',
  password: '!Cl4v301',
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
