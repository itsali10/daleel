export class CreateInvoiceDTO {
    businessId: string;
    invoiceNumber: string;
    issuerName: string;
    receiverName: string;
    totalAmount: number;
    invoiceDate: Date;
}
