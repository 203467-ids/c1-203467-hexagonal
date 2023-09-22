import { Users } from "../../domain/entities/Users";
import { CreateUserRepository } from "../../domain/repositories/UsersRepository";

export class CreateUserImplements implements CreateUserRepository {
    async newUser(users: Users): Promise<void> {
        try {
            await Users.create({
              name: users.name,
              username: users.username,
              password: users.password,
              email: users.email,
            });
          } catch (error) {
            throw new Error("Failed to create users!");
          }
    }
    
}