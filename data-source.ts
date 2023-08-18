import { DataSource } from 'typeorm';
import { AppDataSource } from './ormconfig';

AppDataSource.initialize()
  .then(async () => {
    console.debug('Connection initialized with database...');
    await AppDataSource.synchronize();
  })
  .catch((error) => console.error(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) {
        resolve(AppDataSource);
      } else reject('Failed to create connection with database');
    }, delay);
  });
};

export default AppDataSource;
