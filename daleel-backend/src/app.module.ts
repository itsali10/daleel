import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Import your modules
import { UsersModule } from './modules/users/users.module';
import { BusinessesModule } from './modules/businesses/businesses.module';
import { EtaIntegrationModule } from './modules/eta-integration/eta-integration.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { InvoiceItemsModule } from './modules/invoice-items/invoice-items.module';
import { IncomeReportsModule } from './modules/income-reports/income-reports.module';
import { TaxCalculationsModule } from './modules/tax-calculations/tax-calculations.module';
import { TaxFilingsModule } from './modules/tax-filings/tax-filings.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { DocumentsModule } from './modules/documents/documents.module';

@Module({
  imports: [
    // 1. Load environment variables globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // 2. TypeORM database connection
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,       // Must be defined
      autoLoadEntities: true,              // Loads all entities automatically
      synchronize: false,                  // Keep this false for production
      ssl: { rejectUnauthorized: false },  // REQUIRED for Supabase
    }),

    // 3. Your feature modules
    UsersModule,
    BusinessesModule,
    EtaIntegrationModule,
    InvoicesModule,
    InvoiceItemsModule,
    IncomeReportsModule,
    TaxCalculationsModule,
    TaxFilingsModule,
    PaymentsModule,
    DocumentsModule,
  ],
})
export class AppModule {}
