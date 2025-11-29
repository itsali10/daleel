import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'business_id' })
  businessId: string;

  @Column('numeric')
  amount: number;

  @Column({ name: 'payment_method' })
  paymentMethod: string;

  @Column({ nullable: true, name: 'transaction_id' })
  transactionId: string;

  @Column()
  status: string;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'created_at' })
  createdAt: Date;
}

