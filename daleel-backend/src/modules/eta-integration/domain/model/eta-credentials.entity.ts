import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('eta_credentials')
export class EtaCredentials {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'business_id' })
  businessId: string;

  @Column({ name: 'client_id' })
  clientId: string;

  @Column({ name: 'client_secret' })
  clientSecret: string;

  @Column({ nullable: true })
  token: string;

  @Column({ type: 'timestamp', nullable: true, name: 'token_expiry' })
  tokenExpiry: Date;
}

