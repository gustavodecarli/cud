import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nacionalidad extends BaseEntity {
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
