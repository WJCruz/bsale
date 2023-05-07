import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('flight')
export class Flight extends BaseEntity {
  @Index('id_UNIQUE', { synchronize: false })
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'flight_id',
  })
  flightId: number;

  @Column({
    type: 'int',
    name: 'takeoff_date_time',
  })
  takeoffDataTime: number;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'takeoff_airport',
  })
  takeoffAirport: string;

  @Column({
    type: 'int',
    name: 'landing_date_time',
  })
  landingDateTime: number;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'landing_airport',
  })
  landingAirport: string;

  @Column({
    type: 'int',
    name: 'airplane_id',
  })
  airplaneId: number;
}

export default new Flight();
