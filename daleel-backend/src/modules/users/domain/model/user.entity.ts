import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', unique: true, name: 'supabase_uid' })
  supabaseUid: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true, name: 'national_id' })
  nationalId: string;

  @Column({ type: 'varchar', nullable: true, name: 'full_name' })
  fullName: string;

  @Column({ type: 'varchar', nullable: true })
  mobile: string;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'now()', name: 'updated_at' })
  updatedAt: Date;
}

