import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('income_reports')
export class IncomeReport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'business_id' })
  businessId: string;

  @Column('int')
  month: number;

  @Column('int')
  year: number;

  @Column('numeric')
  revenue: number;

  @Column('numeric')
  expenses: number;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'created_at' })
  createdAt: Date;
}

