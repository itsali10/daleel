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
            supabaseUid: user.id,
            createdAt: new Date(),
            updatedAt: new Date()
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
}