import { SupabaseService } from "src/modules/supabase/supabase.service";
import { RegisterUserDTO } from "../dtos/register-user-dto";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { LoginUserDTO } from "../dtos/login-user-dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService {

    constructor(
        private readonly supabaseService: SupabaseService,
        private readonly userRepository: IUserRepository
    ) {}

    async register(registerDTO: RegisterUserDTO){
        const supabase = this.supabaseService.getClient();
        console.log('Registering user:', registerDTO);
        const { data, error } = await supabase.auth.signUp({
            email: registerDTO.email,
            password: registerDTO.password,
        });
        if (error) {
            throw new Error(`Registration failed: ${error.message}`);
        }
        
        const user = data.user;
        if (!user) {
            throw new Error('User registration failed: No user data returned');
        }
        
        const newUser = this.userRepository.create({
            id: user.id,
            email: registerDTO.email,
            fullName: registerDTO.fullName,
            nationalId: registerDTO.nationalId,
            mobile: registerDTO.mobile,
            dateOfBirth: new Date(this.extractDateOfBirthFromNationalId(registerDTO.nationalId)),
            supabaseUid: user.id,
            createdAt: new Date(),
            updatedAt: new Date(),
            isSubscribed: false,
        })
        await this.userRepository.save(await newUser);

        return {
            message: 'User registered successfully',
            user: newUser,
        };
    }

    async login(loginDTO: LoginUserDTO){
        const supabase = this.supabaseService.getClient();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginDTO.email,
            password: loginDTO.password,
        });

        if (error) {
            throw new Error(error.message);
        }

        return data;
        
    }
    
    extractDateOfBirthFromNationalId(nationalId: string): string {
        if (!/^\d{14}$/.test(nationalId)) {
            throw new Error('Invalid Egyptian National ID format.');
        }

        const centuryCode: string = nationalId[0];
        const year: string = nationalId.substring(1, 3);
        const month: string = nationalId.substring(3, 5);
        const day: string = nationalId.substring(5, 7);

        let centuryPrefix: string;
        if (centuryCode === '2') {
            centuryPrefix = '19';
        } else if (centuryCode === '3') {
            centuryPrefix = '20';
        } else {
            throw new Error('Invalid century code in national ID.');
        }

        const fullYear: string = `${centuryPrefix}${year}`;

        return `${day}-${month}-${fullYear}`;
        }

}