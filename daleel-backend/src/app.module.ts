import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users/users.module';
import { BusinessesModule } from './modules/businesses/businesses.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { SupabaseModule } from './modules/supabase/supabase.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,       // Must be defined
      autoLoadEntities: true,              // Loads all entities automatically
      synchronize: false,                  // Keep this false for production
      ssl: { rejectUnauthorized: false },  // REQUIRED for Supabase
    }),
    UsersModule,
    BusinessesModule,
    InvoicesModule,
    SupabaseModule,
  ],
})
export class AppModule {}
