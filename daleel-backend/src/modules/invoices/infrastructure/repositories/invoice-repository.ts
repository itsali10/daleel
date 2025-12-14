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
            totalAmount: dto.totalAmount,
            invoiceDate: dto.invoiceDate
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

    async getQuarterlyInvoiceTotals(businessId: string, year: number): Promise<{ quarter: number; totalRevenue: number }[]> {
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31, 23, 59, 59);

        const invoices = await this.invoiceRepo.find({
            where: {
                businessId,
            },
        });

        // Filter invoices for the specified year and group by quarter
        const quarterlyTotals = [1, 2, 3, 4].map(quarter => {
            const quarterStart = new Date(year, (quarter - 1) * 3, 1);
            const quarterEnd = new Date(year, quarter * 3, 0, 23, 59, 59);

            const quarterInvoices = invoices.filter(invoice => {
                const invoiceDate = invoice.invoiceDate ? new Date(invoice.invoiceDate) : new Date(invoice.createdAt);
                return invoiceDate >= quarterStart && invoiceDate <= quarterEnd;
            });

            const totalRevenue = quarterInvoices.reduce((sum, invoice) => 
                sum + parseFloat(invoice.totalAmount.toString()), 0
            );

            return { quarter, totalRevenue };
        });

        return quarterlyTotals;
    }
}
