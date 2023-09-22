import { GetAllUsersRepository } from "../../domain/repositories/UsersRepository";

export class GetAllUsersUseCase {
  constructor(readonly getAllUsersRepository: GetAllUsersRepository) {
    // TODO document why this constructor is empty
  }

  async run() {
    const listAllUsers =  this.getAllUsersRepository.getAllUsers();
    return listAllUsers;
  }
}