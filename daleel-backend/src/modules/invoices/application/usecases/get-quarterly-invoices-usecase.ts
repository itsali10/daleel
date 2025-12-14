import { Injectable } from "@nestjs/common";
import { IInvoiceRepository } from "../../domain/repositories/IInvoiceRepository";
import { YearlyInvoicesResponse, QuarterlyInvoicesDTO } from "../dtos/quarterly-invoices-dto";

@Injectable()
export class GetQuarterlyInvoicesUsecase {
  
    constructor(
        private readonly invoiceRepository: IInvoiceRepository,
    ) {}
    
    async execute(businessId: string, year?: number): Promise<YearlyInvoicesResponse> {
        const targetYear = year || new Date().getFullYear();
        
        // Get all invoices for the business
        const allInvoices = await this.invoiceRepository.findByBusinessId(businessId);
        
        // Group invoices by quarter
        const quarterlyData: QuarterlyInvoicesDTO[] = [1, 2, 3, 4].map(quarter => {
            const quarterStart = new Date(targetYear, (quarter - 1) * 3, 1);
            const quarterEnd = new Date(targetYear, quarter * 3, 0, 23, 59, 59);

            // Filter invoices for this quarter using invoice_date
            const quarterInvoices = allInvoices.filter(invoice => {
                const invoiceDate = new Date(invoice.invoiceDate);
                return invoiceDate >= quarterStart && invoiceDate <= quarterEnd;
            });

            // Calculate total for this quarter
            const totalAmount = quarterInvoices.reduce((sum, invoice) => 
                sum + parseFloat(invoice.totalAmount.toString()), 0
            );

            return {
                quarter,
                invoices: quarterInvoices,
                totalAmount
            };
        });

        // Calculate grand total across all quarters
        const grandTotal = quarterlyData.reduce((sum, q) => sum + q.totalAmount, 0);

        return {
            year: targetYear,
            quarterlyData,
            grandTotal
        };
    }
}
