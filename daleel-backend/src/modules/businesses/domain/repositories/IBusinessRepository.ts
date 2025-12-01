import { Business } from "../models/business.entity";
import { CreateBusinessDTO } from "../../application/dtos/create-business-dto";

export abstract class IBusinessRepository {
    abstract addBusiness(dto: CreateBusinessDTO): Promise<Business>;
    abstract findByUserId(userId: string): Promise<Business[]>;
}