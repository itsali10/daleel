import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('businesses')
export class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'user_id' })
  userId: string;

  @Column({ type: 'varchar', nullable: true, name: 'activity_type' })
  activityType: string;

  @Column({ type: 'varchar', nullable: true, name: 'tax_reg_number' })
  taxRegNumber: string;

  @Column({ type: 'varchar', nullable: true, name: 'revenue_bracket' })
  revenueBracket: string;

  @Column({ type: 'varchar', nullable: true, name: 'eta_integration_status' })
  etaIntegrationStatus: string;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'created_at' })
  createdAt: Date;
}