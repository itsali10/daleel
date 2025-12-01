import { Injectable } from "@nestjs/common";
import { IInvoiceRepository } from "../../domain/repositories/IInvoiceRepository";
import { Invoice } from "../../domain/model/invoice.entity";

@Injectable()
export class GetBusinessInvoicesUsecase {
  
    constructor(
        private readonly invoiceRepository: IInvoiceRepository,
    ) {}
    
    async execute(businessId: string): Promise<Invoice[]> {
        return await this.invoiceRepository.findByBusinessId(businessId);
    }
}
