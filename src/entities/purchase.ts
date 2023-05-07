import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('purchase')
export class Purchase extends BaseEntity {
  @Index('id_UNIQUE', { synchronize: false })
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'purchase_id',
  })
  purchaseId: number;

  @Column({
    type: 'int',
    name: 'purchase_date',
  })
  passengerDate: number;
}

export default new Purchase();
