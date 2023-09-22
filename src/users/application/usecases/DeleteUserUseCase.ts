import { DeleteUserRepository } from "../../domain/repositories/UsersRepository";

export class DeleteUserUseCase{
constructor(readonly deleteUserRepository: DeleteUserRepository){

}



async run(userId: number){
    try{
        const deleteUser = await this.deleteUserRepository.deleteUser(userId)
        return deleteUser;
    }catch (error) {
        throw new Error("Failed to delete user!");
      }
    
}
}