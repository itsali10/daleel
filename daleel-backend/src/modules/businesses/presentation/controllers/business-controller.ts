import { Body, Controller, Post } from "@nestjs/common";
import { CreateBusinessUsecase } from "../../application/usecases/create-business-usecase";
import { GetUserBusinessesUsecase } from "../../application/usecases/get-user-businesses-usecase";
import { CalculateTaxUsecase } from "../../application/usecases/calculate-tax-usecase";
import { CreateBusinessDTO } from "../../application/dtos/create-business-dto";
import { Business } from "../../domain/models/business.entity";

@Controller('business')
export class BusinessController {

    constructor(
        private readonly createBusinessUsecase: CreateBusinessUsecase,
        private readonly getUserBusinessesUsecase: GetUserBusinessesUsecase,
        private readonly calculateTaxUsecase: CalculateTaxUsecase,
    ) {}
    
    @Post('add')
    async createBusiness(@Body() dto: CreateBusinessDTO): Promise<Business> {
        return this.createBusinessUsecase.execute(dto);
    }

    @Post('user-businesses')
    async getUserBusinesses(@Body('userId') userId: string): Promise<Business[]> {
        return this.getUserBusinessesUsecase.execute(userId);
    }

    @Post('calculate-tax')
    async calculateTax(@Body('businessId') businessId: string): Promise<{ totalRevenue: number; taxRate: number; taxAmount: number }> {
        return this.calculateTaxUsecase.execute(businessId);
    }
}
