import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'business_id' })
  businessId: string;

  @Column({ name: 'invoice_uuid' })
  invoiceUuid: string;

  @Column({ name: 'invoice_number' })
  invoiceNumber: string;

  @Column({ name: 'customer_name' })
  customerName: string;

  @Column({ nullable: true, name: 'customer_tax_id' })
  customerTaxId: string;

  @Column({ type: 'date', name: 'issue_date' })
  issueDate: string;

  @Column({ type: 'numeric', name: 'total_amount' })
  totalAmount: number;

  @Column({ nullable: true, name: 'eta_submission_status' })
  etaSubmissionStatus: string;

  @Column({ nullable: true, name: 'eta_document_id' })
  etaDocumentId: string;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'created_at' })
  createdAt: Date;
}

