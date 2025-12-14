export interface QuarterlyInvoicesDTO {
    quarter: number;
    invoices: any[];
    totalAmount: number;
}

export interface YearlyInvoicesResponse {
    year: number;
    quarterlyData: QuarterlyInvoicesDTO[];
    grandTotal: number;
}
