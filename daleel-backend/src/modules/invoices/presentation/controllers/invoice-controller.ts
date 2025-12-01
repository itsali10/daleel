import { Body, Controller, Post } from "@nestjs/common";
import { CreateInvoiceUsecase } from "../../application/usecases/create-invoice-usecase";
import { GetBusinessInvoicesUsecase } from "../../application/usecases/get-business-invoices-usecase";
import { CreateInvoiceDTO } from "../../application/dtos/create-invoice-dto";
import { Invoice } from "../../domain/model/invoice.entity";

@Controller('invoices')
export class InvoiceController {

    constructor(
        private readonly createInvoiceUsecase: CreateInvoiceUsecase,
        private readonly getBusinessInvoicesUsecase: GetBusinessInvoicesUsecase,
    ) {}
    
    @Post('add')
    async createInvoice(@Body() dto: CreateInvoiceDTO): Promise<Invoice> {
        return this.createInvoiceUsecase.execute(dto);
    }

    @Post('business-invoices')
    async getBusinessInvoices(@Body('businessId') businessId: string): Promise<Invoice[]> {
        return this.getBusinessInvoicesUsecase.execute(businessId);
    }
}
