import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tax_calculations')
export class TaxCalculation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'business_id' })
  businessId: string;

  @Column({ type: 'date', name: 'period_start' })
  periodStart: string;

  @Column({ type: 'date', name: 'period_end' })
  periodEnd: string;

  @Column({ type: 'numeric', name: 'calculated_tax' })
  calculatedTax: number;

  @Column({ type: 'jsonb', name: 'calculation_details' })
  calculationDetails: any;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'created_at' })
  createdAt: Date;
}

