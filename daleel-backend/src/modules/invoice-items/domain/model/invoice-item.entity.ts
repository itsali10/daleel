import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoice_items')
export class InvoiceItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'invoice_id' })
  invoiceId: string;

  @Column()
  description: string;

  @Column({ type: 'numeric' })
  quantity: number;

  @Column({ type: 'numeric', name: 'unit_price' })
  unitPrice: number;

  @Column({ name: 'tax_type' })
  taxType: string;

  @Column({ type: 'numeric', name: 'tax_rate' })
  taxRate: number;

  @Column({ type: 'numeric' })
  total: number;
}

