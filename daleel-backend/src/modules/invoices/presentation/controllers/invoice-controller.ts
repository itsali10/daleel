import { Body, Controller, Post } from "@nestjs/common";
import { CreateInvoiceUsecase } from "../../application/usecases/create-invoice-usecase";
import { GetBusinessInvoicesUsecase } from "../../application/usecases/get-business-invoices-usecase";
import { GetQuarterlyInvoicesUsecase } from "../../application/usecases/get-quarterly-invoices-usecase";
import { CreateInvoiceDTO } from "../../application/dtos/create-invoice-dto";
import { Invoice } from "../../domain/model/invoice.entity";
import { YearlyInvoicesResponse } from "../../application/dtos/quarterly-invoices-dto";

@Controller('invoices')
export class InvoiceController {

    constructor(
        private readonly createInvoiceUsecase: CreateInvoiceUsecase,
        private readonly getBusinessInvoicesUsecase: GetBusinessInvoicesUsecase,
        private readonly getQuarterlyInvoicesUsecase: GetQuarterlyInvoicesUsecase,
    ) {}
    
    @Post('add')
    async createInvoice(@Body() dto: CreateInvoiceDTO): Promise<Invoice> {
        return this.createInvoiceUsecase.execute(dto);
    }

    @Post('business-invoices')
    async getBusinessInvoices(@Body('businessId') businessId: string): Promise<Invoice[]> {
        return this.getBusinessInvoicesUsecase.execute(businessId);
    }

    @Post('quarterly-invoices')
    async getQuarterlyInvoices(@Body() body: { businessId: string; year?: number }): Promise<YearlyInvoicesResponse> {
        return this.getQuarterlyInvoicesUsecase.execute(body.businessId, body.year);
    }
}
