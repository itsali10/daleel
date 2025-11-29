import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tax_filings')
export class TaxFiling {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'business_id' })
  businessId: string;

  @Column({ name: 'filing_period' })
  filingPeriod: string;

  @Column({ name: 'filing_pdf_url' })
  filingPdfUrl: string;

  @Column({ nullable: true, name: 'submission_status' })
  submissionStatus: string;

  @Column({ nullable: true, name: 'submission_reference' })
  submissionReference: string;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'created_at' })
  createdAt: Date;
}

