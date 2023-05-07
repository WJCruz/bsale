import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('airplane')
export class Airplane extends BaseEntity {
  @Index('id_UNIQUE', { synchronize: false })
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'airplane_id',
  })
  airplaneId: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;
}

export default new Airplane();
