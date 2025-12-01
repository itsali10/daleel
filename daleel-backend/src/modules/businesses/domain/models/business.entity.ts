import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('businesses')
export class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'user_id' })
  userId: string;

  @Column({ type: 'varchar', nullable: true, name: 'business_name' })
  businessName: string;

  @Column({ type: 'varchar', nullable: true, name: 'tax_reg_number' })
  taxRegNumber: string;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'created_at' })
  createdAt: Date;
}