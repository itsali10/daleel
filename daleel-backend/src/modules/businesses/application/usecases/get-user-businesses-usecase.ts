import { Injectable } from "@nestjs/common";
import { IBusinessRepository } from "../../domain/repositories/IBusinessRepository";
import { Business } from "../../domain/models/business.entity";

@Injectable()
export class GetUserBusinessesUsecase {
  
    constructor(
        private readonly businessRepository: IBusinessRepository,
    ) {}
    
    async execute(userId: string): Promise<Business[]> {
        return await this.businessRepository.findByUserId(userId);
    }
}
