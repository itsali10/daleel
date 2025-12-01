import { CreateInvoiceDTO } from "../../application/dtos/create-invoice-dto";
import { Invoice } from "../model/invoice.entity";

export abstract class IInvoiceRepository {
    abstract addInvoice(dto: CreateInvoiceDTO): Promise<Invoice>;
    abstract findByBusinessId(businessId: string): Promise<Invoice[]>;
    abstract getTotalInvoiceAmount(businessId: string): Promise<number>;
}
