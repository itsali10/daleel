import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserDetailsDTO } from "../dtos/user-details-dto";

@Injectable()
export class GetUserDetailsUsecase {
  
    constructor(
        private readonly userRepository: IUserRepository,
    ) {}
    
    async execute(id: string) : Promise<UserDetailsDTO | null> {
        const userDetails = await this.userRepository.findById(id);
        if (!userDetails) {
            throw new Error('User not found');
        }
        const userDetailsDTO = new UserDetailsDTO();
        userDetailsDTO.fullName = userDetails.fullName;
        userDetailsDTO.email = userDetails.email;
        userDetailsDTO.mobile = userDetails.mobile;
        userDetailsDTO.nationalId = userDetails.nationalId;
        userDetailsDTO.dateOfBirth = userDetails.dateOfBirth;
        return userDetailsDTO;
    }
}