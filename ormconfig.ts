import { DataSource } from 'typeorm';
import { AuditingSubscriber } from 'typeorm-auditing';
import { CategoriaActividad } from './entity/CategoriaActividad';
import { CondicionActividad } from './entity/CondicionActividad';
import { EstadoCalle } from './entity/EstadoCalle';
import { EstadoCivil } from './entity/EstadoCivil';
import { Genero } from './entity/Genero';
import { GradoAlfabetizacion } from './entity/GradoAlfabetizacion';
import { Localidad } from './entity/Localidad';
import { Moneda } from './entity/Moneda';
import { Nacionalidad } from './entity/Nacionalidad';
import { Province } from './entity/Province';
import { TipoDeficiencia } from './entity/TipoDeficiencia';
import { TipoDocumento } from './entity/TipoDocumento';
import { TipoEquipamiento } from './entity/TipoEquipamiento';
import { TipoMatricula } from './entity/TipoMatricula';
import { TipoNacionalidad } from './entity/TipoNacionalidad';
import { TipoOrientacionProfesional } from './entity/TipoOrientacionProfesional';
import { TipoResidencia } from './entity/TipoResidencia';
import { TipoTelefono } from './entity/TipoTelefono';
import { TipoVivienda } from './entity/TipoVivienda';
import { Vinculos } from './entity/Vinculos';
/*MODELOS*/

export const AppDataSource = new DataSource({
  type: 'mysql',
  //url : process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
  synchronize: false,
  logging: true,
  entities: [
    TipoMatricula,
    CategoriaActividad,
    CondicionActividad,
    GradoAlfabetizacion,
    Vinculos,
    EstadoCalle,
    TipoVivienda,
    TipoOrientacionProfesional,
    TipoDeficiencia,
    TipoEquipamiento,
    TipoTelefono,
    Genero,
    EstadoCivil,
    Localidad,
    TipoResidencia,
    Province,
    Nacionalidad,
    TipoNacionalidad,
    Moneda,
    TipoDocumento
  ],

  subscribers: [AuditingSubscriber],
  migrations: [],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});
