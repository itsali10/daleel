import { Injectable } from "@nestjs/common";
import { IInvoiceRepository } from "../../../invoices/domain/repositories/IInvoiceRepository";

@Injectable()
export class CalculateTaxUsecase {
    
    constructor(
        private readonly invoiceRepository: IInvoiceRepository
    ) {}

    async execute(businessId: string): Promise<{ totalRevenue: number; taxRate: number; taxAmount: number }> {
        // Get total amount from all invoices for this business
        const totalRevenue = await this.invoiceRepository.getTotalInvoiceAmount(businessId);
        
        // Calculate tax based on revenue brackets
        const taxRate = this.calculateTaxRate(totalRevenue);
        const taxAmount = totalRevenue * taxRate;

        return {
            totalRevenue,
            taxRate: taxRate * 100, // Return as percentage
            taxAmount
        };
    }

    private calculateTaxRate(revenue: number): number {
        if (revenue < 500000) {
            return 0.004; // 0.4%
        } else if (revenue < 2000000) {
            return 0.005; // 0.5%
        } else if (revenue < 3000000) {
            return 0.0075; // 0.75%
        } else if (revenue < 10000000) {
            return 0.01; // 1%
        } else if (revenue <= 20000000) {
            return 0.015; // 1.5%
        } else {
            // For revenue above 20 million, maintain 1.5% or define a different rate
            return 0.015; // 1.5%
        }
    }
}
