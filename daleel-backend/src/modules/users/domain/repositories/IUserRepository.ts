import { User } from "../model/user.entity";

export abstract class IUserRepository {
    abstract findByEmail(email: string): Promise<User | null>;
    abstract save(user: User): Promise<User>;
    abstract findById(id: string): Promise<User | null>;
    abstract create(user: User): Promise<User>;
}