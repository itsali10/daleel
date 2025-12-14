import { Injectable } from "@nestjs/common";
import { IInvoiceRepository } from "../../../invoices/domain/repositories/IInvoiceRepository";

export interface QuarterlyTaxResult {
    quarter: number;
    totalRevenue: number;
    taxRate: number;
    taxAmount: number;
}

export interface YearlyTaxCalculation {
    year: number;
    quarterlyTaxes: QuarterlyTaxResult[];
    totalTaxForYear: number;
}

@Injectable()
export class CalculateTaxUsecase {
    
    constructor(
        private readonly invoiceRepository: IInvoiceRepository
    ) {}

    async execute(businessId: string, year?: number): Promise<YearlyTaxCalculation> {
        const targetYear = year || new Date().getFullYear();
        
        // Get quarterly totals for the specified year
        const quarterlyTotals = await this.invoiceRepository.getQuarterlyInvoiceTotals(businessId, targetYear);
        
        // Calculate tax for each quarter using cumulative YTD approach
        let cumulativeRevenue = 0;
        let cumulativeTaxPaid = 0;
        
        const quarterlyTaxes = quarterlyTotals.map(quarter => {
            // Add current quarter revenue to YTD total
            cumulativeRevenue += quarter.totalRevenue;
            
            // Calculate tax on YTD revenue
            const taxRate = this.calculateTaxRate(cumulativeRevenue);
            const totalTaxOnYTD = cumulativeRevenue * taxRate;
            
            // Tax due this quarter = Total tax on YTD - Tax already paid
            const taxAmount = totalTaxOnYTD - cumulativeTaxPaid;
            
            // Update cumulative tax paid
            cumulativeTaxPaid = totalTaxOnYTD;

            return {
                quarter: quarter.quarter,
                totalRevenue: quarter.totalRevenue,
                taxRate: taxRate * 100, // Return as percentage
                taxAmount: Math.max(0, taxAmount) // Ensure non-negative
            };
        });

        const totalTaxForYear = quarterlyTaxes.reduce((sum, q) => sum + q.taxAmount, 0);

        return {
            year: targetYear,
            quarterlyTaxes,
            totalTaxForYear
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
