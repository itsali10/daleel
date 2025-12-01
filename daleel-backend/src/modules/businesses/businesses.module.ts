import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './domain/models/business.entity';
import { BusinessController } from './presentation/controllers/business-controller';
import { CreateBusinessUsecase } from './application/usecases/create-business-usecase';
import { GetUserBusinessesUsecase } from './application/usecases/get-user-businesses-usecase';
import { CalculateTaxUsecase } from './application/usecases/calculate-tax-usecase';
import { IBusinessRepository } from './domain/repositories/IBusinessRepository';
import { BusinessRepository } from './infrastructure/repositories/business-repository';
import { InvoicesModule } from '../invoices/invoices.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Business]),
    InvoicesModule
  ],
  controllers: [BusinessController],
  providers: [
    CreateBusinessUsecase,
    GetUserBusinessesUsecase,
    CalculateTaxUsecase,
    {
      provide: IBusinessRepository,
      useClass: BusinessRepository,
    },
  ],
  exports: [],
})
export class BusinessesModule {}
