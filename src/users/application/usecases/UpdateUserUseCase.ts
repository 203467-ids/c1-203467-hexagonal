import { Users } from "../../domain/entities/Users";
import { UpdateUserRepository } from "../../domain/repositories/UsersRepository";

export class UpdateUserUseCase{
constructor(readonly updateUserRepository: UpdateUserRepository){

}

async run(user: Users){
    try{
        const updateUser = await this.updateUserRepository.updateUser(user);
        return updateUser;
    }catch (error) {
        throw new Error("Failed to updated user!");
      }
    
}
}