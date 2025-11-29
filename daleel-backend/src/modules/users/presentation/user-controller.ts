import { Body, Controller, Post } from "@nestjs/common";
import { AuthenticationService } from "../application/services/authentication-service";
import { RegisterUserDTO } from "../application/dtos/register-user-dto";

@Controller('users')
export class UserController {

    constructor(private readonly authService: AuthenticationService) {}
    
    @Post('register')
    async register(@Body() dto: RegisterUserDTO) {
        return this.authService.register(dto);
    }

}