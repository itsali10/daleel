import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/model/user.entity';
import { AuthenticationService } from './application/services/authentication-service';
import { UserController } from './presentation/user-controller';
import { IUserRepository } from './domain/repositories/IUserRepository';
import { UserRepository } from './infrastructure/repositories/user-repository';
import { SupabaseModule } from '../supabase/supabase.module';
import { GetUserDetailsUsecase } from './application/usecases/get-user-details-usecase';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    SupabaseModule
  ],

  providers:[
    AuthenticationService,
    {
      provide: IUserRepository,
      useClass: UserRepository
    },
    GetUserDetailsUsecase
  ],
  controllers: [UserController],

  exports: [
    TypeOrmModule,
  ],
})
export class UsersModule {}
