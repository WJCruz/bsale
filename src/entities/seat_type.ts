import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('seat_type')
export class SeatType extends BaseEntity {
  @Index('id_UNIQUE', { synchronize: false })
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'seat_type_id',
  })
  seatTypeId: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;
}

export default new SeatType();
