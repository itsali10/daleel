import { Injectable } from "@nestjs/common";
import { IInvoiceRepository } from "../../domain/repositories/IInvoiceRepository";
import { CreateInvoiceDTO } from "../dtos/create-invoice-dto";
import { Invoice } from "../../domain/model/invoice.entity";

@Injectable()
export class CreateInvoiceUsecase {
  
    constructor(
        private readonly invoiceRepository: IInvoiceRepository,
    ) {}
    
    async execute(dto: CreateInvoiceDTO): Promise<Invoice> {
        return await this.invoiceRepository.addInvoice(dto);
    }
}
