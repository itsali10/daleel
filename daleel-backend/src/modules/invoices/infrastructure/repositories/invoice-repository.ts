import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IInvoiceRepository } from "../../domain/repositories/IInvoiceRepository";
import { Invoice } from "../../domain/model/invoice.entity";
import { CreateInvoiceDTO } from "../../application/dtos/create-invoice-dto";

@Injectable()
export class InvoiceRepository extends IInvoiceRepository {
    
    constructor(
        @InjectRepository(Invoice) 
        private readonly invoiceRepo: Repository<Invoice>
    ) {
        super();
    }

    async addInvoice(dto: CreateInvoiceDTO): Promise<Invoice> {
        const invoice = this.invoiceRepo.create({
            businessId: dto.businessId,
            invoiceNumber: dto.invoiceNumber,
            issuerName: dto.issuerName,
            receiverName: dto.receiverName,
            totalAmount: dto.totalAmount
        });
        return await this.invoiceRepo.save(invoice);
    }

    async findByBusinessId(businessId: string): Promise<Invoice[]> {
        return await this.invoiceRepo.find({ 
            where: { businessId } 
        });
    }

    async getTotalInvoiceAmount(businessId: string): Promise<number> {
        const result = await this.invoiceRepo
            .createQueryBuilder('invoice')
            .select('SUM(invoice.total_amount)', 'total')
            .where('invoice.business_id = :businessId', { businessId })
            .getRawOne();
        
        return parseFloat(result?.total || '0');
    }
}
