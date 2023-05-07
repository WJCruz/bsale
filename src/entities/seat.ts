import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('seat')
export class Seat extends BaseEntity {
  @Index('id_UNIQUE', { synchronize: false })
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'seat_id',
  })
  seatId: number;

  @Column({
    type: 'varchar',
    length: 2,
    name: 'seat_column',
  })
  seatColumn: string;

  @Column({
    type: 'int',
    name: 'seat_row',
  })
  seatRow: number;

  @Column({
    type: 'int',
    name: 'seat_type_id',
  })
  seatTypeId: number;

  @Column({
    type: 'int',
    name: 'airplane_id',
  })
  airplaneId: number;
}

export default new Seat();
