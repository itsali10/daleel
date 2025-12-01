import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IBusinessRepository } from "../../domain/repositories/IBusinessRepository";
import { Business } from "../../domain/models/business.entity";
import { CreateBusinessDTO } from "../../application/dtos/create-business-dto";

@Injectable()
export class BusinessRepository extends IBusinessRepository {
    
    constructor(
        @InjectRepository(Business) 
        private readonly businessRepo: Repository<Business>
    ) {
        super();
    }

    async addBusiness(dto: CreateBusinessDTO): Promise<Business> {
        const business = this.businessRepo.create({
            userId: dto.userId,
            businessName: dto.businessName,
            taxRegNumber: dto.taxRegNumber
        });
        return await this.businessRepo.save(business);
    }

    async findByUserId(userId: string): Promise<Business[]> {
        return await this.businessRepo.find({ 
            where: { userId } 
        });
    }
}