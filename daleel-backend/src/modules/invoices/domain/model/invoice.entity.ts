import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'business_id' })
  businessId: string;

  @Column({ type: 'varchar', name: 'invoice_uuid' })
  invoiceUuid: string;

  @Column({ type: 'varchar', name: 'invoice_number' })
  invoiceNumber: string;

  @Column({ type: 'varchar', name: 'issuer_name' })
  issuerName: string;

  @Column({ type: 'varchar', name: 'receiver_name' })
  receiverName: string;

  @Column({ type: 'numeric', name: 'total_amount' })
  totalAmount: number;

  @Column({ type: 'timestamp', name: 'invoice_date' })
  invoiceDate: Date;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'created_at' })
  createdAt: Date;
}

