import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('boarding_pass')
export class BoardingPass extends BaseEntity {
  @Index('id_UNIQUE', { synchronize: false })
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'boarding_pass_id',
  })
  boardingPassId: number;

  @Column({
    type: 'int',
    name: 'purchase_id',
  })
  purchaseId: number;

  @Column({
    type: 'int',
    name: 'passenger_id',
  })
  passengerId: number;

  @Column({
    type: 'int',
    name: 'seat_type_id',
  })
  seatTypeId: number;

  @Column({
    type: 'int',
    name: 'seat_id',
  })
  seatId: number;

  @Column({
    type: 'int',
    name: 'flight_id',
  })
  flightId: number;
}

export default new BoardingPass();
