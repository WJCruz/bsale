import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('passenger')
export class Passenger extends BaseEntity {
  @Index('id_UNIQUE', { synchronize: false })
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'passenger_id',
  })
  passengerId: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  dni: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  country: string;
}

export default new Passenger();
