import { DataSource } from 'typeorm';
import { AuditingSubscriber } from 'typeorm-auditing';
import { EstadoCivil } from './entity/EstadoCivil';
import { Genero } from './entity/Genero';
import { Localidad } from './entity/Localidad';
import { Moneda } from './entity/Moneda';
import { Nacionalidad } from './entity/Nacionalidad';
import { Province } from './entity/Province';
import { TipoDocumento } from './entity/TipoDocumento';
import { TipoNacionalidad } from './entity/TipoNacionalidad';
import { TipoResidencia } from './entity/TipoResidencia';
import {TipoTelefono} from './entity/TipoTelefono'; import {TipoEquipamiento} from './entity/TipoEquipamiento'; import {TipoDeficiencia} from './entity/TipoDeficiencia'; import {TipoOrientacionProfesional} from './entity/TipoOrientacionProfesional'; import {TipoVivienda} from './entity/TipoVivienda'; import {EstadoCalle} from './entity/EstadoCalle'; import {Vinculos} from './entity/Vinculos'; import {GradoAlfabetizacion} from './entity/GradoAlfabetizacion'; import {CondicionActividad} from './entity/CondicionActividad'; import {CategoriaActividad} from './entity/CategoriaActividad'; import {TipoMatricula} from './entity/TipoMatricula'; /*MODELOS*/

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
  entities: [    TipoMatricula,    CategoriaActividad,    CondicionActividad,    GradoAlfabetizacion,    Vinculos,    EstadoCalle,    TipoVivienda,    TipoOrientacionProfesional,    TipoDeficiencia,    TipoEquipamiento,    TipoTelefono,
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
