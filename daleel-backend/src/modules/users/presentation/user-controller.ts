import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthenticationService } from "../application/services/authentication-service";
import { RegisterUserDTO } from "../application/dtos/register-user-dto";
import { LoginUserDTO } from "../application/dtos/login-user-dto";
import { GetUserDetailsUsecase } from "../application/usecases/get-user-details-usecase";
import { UserDetailsDTO } from "../application/dtos/user-details-dto";

@Controller('users')
export class UserController {

    constructor(
        private readonly authService: AuthenticationService,
        private readonly getUserDetailsUsecase: GetUserDetailsUsecase,
    ) {}
    
    @Post('register')
    async register(@Body() dto: RegisterUserDTO) {
        return this.authService.register(dto);
    }

    @Post('login')
    async login(@Body() dto: LoginUserDTO) {
        return this.authService.login(dto);
    }

    @Post('user')
    async getUserDetails(@Body('id') id: string) : Promise<UserDetailsDTO | null> {
        return this.getUserDetailsUsecase.execute(id);
    }

}