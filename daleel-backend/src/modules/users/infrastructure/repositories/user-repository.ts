import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../domain/model/user.entity";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class UserRepository extends IUserRepository {

    constructor(@InjectRepository(User) private readonly userRepo) {
        super();
    }

    findByEmail(email: string): Promise<User | null> {
        return this.userRepo.findOne({ where: { email } });
    }

    save(user: User): Promise<User> {
        return this.userRepo.save(user);
    }

    findById(id: string): Promise<User | null> {
        return this.userRepo.findOne({ where: { id } });
    }

    create(user: User): Promise<User> {
        const newUser = this.userRepo.create(user);
        return this.userRepo.save(newUser);
    }

}