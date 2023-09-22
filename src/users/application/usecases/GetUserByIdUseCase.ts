import { GetUserByIdRepository } from "../../domain/repositories/UsersRepository";

export class GetUserByIdUseCase {
  constructor(readonly getUserByIdRepository: GetUserByIdRepository) {}

  async run(userId: number) {
    try{
        const user = await this.getUserByIdRepository.getUserById(userId)
    return user;
    }catch (error) {
        throw new Error("Failed to get user!");
      }
    
  }
}