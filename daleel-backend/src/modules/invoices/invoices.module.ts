import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './domain/model/invoice.entity';
import { InvoiceController } from './presentation/controllers/invoice-controller';
import { CreateInvoiceUsecase } from './application/usecases/create-invoice-usecase';
import { GetBusinessInvoicesUsecase } from './application/usecases/get-business-invoices-usecase';
import { IInvoiceRepository } from './domain/repositories/IInvoiceRepository';
import { InvoiceRepository } from './infrastructure/repositories/invoice-repository';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice])],
  controllers: [InvoiceController],
  providers: [
    CreateInvoiceUsecase,
    GetBusinessInvoicesUsecase,
    {
      provide: IInvoiceRepository,
      useClass: InvoiceRepository,
    },
  ],
  exports: [IInvoiceRepository],
})
export class InvoicesModule {}
