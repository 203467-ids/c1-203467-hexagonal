import { Users } from "../../domain/entities/Users";
import { CreateUserRepository } from "../../domain/repositories/UsersRepository";

export class CreateUserUseCase{
constructor(readonly createUserRepository: CreateUserRepository){

}

async run(user: Users){
    try{
        const createUser = await this.createUserRepository.newUser(user);
        return createUser;
    }catch (error) {
        throw new Error("Failed to create users!");
      }
    
}
}