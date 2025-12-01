import { Injectable } from "@nestjs/common";
import { IBusinessRepository } from "../../domain/repositories/IBusinessRepository";
import { CreateBusinessDTO } from "../dtos/create-business-dto";
import { Business } from "../../domain/models/business.entity";

@Injectable()
export class CreateBusinessUsecase {
  
    constructor(
        private readonly businessRepository: IBusinessRepository,
    ) {}
    
    async execute(dto: CreateBusinessDTO): Promise<Business> {
        return await this.businessRepository.addBusiness(dto);
    }
}
