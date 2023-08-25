import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import CodigoDescripcion from './interfaces/CodigoDescripcion';

@Entity()
export class Pais extends BaseEntity implements CodigoDescripcion {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 5 })
  codigo: string;

  @Column('varchar', { length: 100 })
  descripcion: string;

  constructor() {
    super();
    this.id = 0;
    this.codigo = '';
    this.descripcion = '';
  }
}
