import { DataSource } from 'typeorm';
import { Province } from './entity/Province';

/*
const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'cud',
  synchronize: false,
  logging: false,
  entities: [Province],
  subscribers: [],
  migrations: []
});
*/

const AppDataSource = new DataSource({
  type: 'mysql',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: [Province],
  subscribers: [],
  migrations: [],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});

AppDataSource.initialize()
  .then(async () => {
    console.log('Connection initialized with database...');
  })
  .catch((error) => console.log(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject('Failed to create connection with database');
    }, delay);
  });
};

/*

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    return AppDataSource;
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
*/
