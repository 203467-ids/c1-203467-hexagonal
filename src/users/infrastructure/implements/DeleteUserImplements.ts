import { Users } from "../../domain/entities/Users";
import { DeleteUserRepository } from "../../domain/repositories/UsersRepository";

export class DeleteUserImplements implements DeleteUserRepository {
    async deleteUser(usersId: number): Promise<void> {
        try {
            //  find existing users
            const new_users = await Users.findOne({
              where: {
                id: usersId,
              },
            });
      
            if (!new_users) {
              throw new Error("Users not found");
            }
            // delete
            await new_users.destroy();
          } catch (error) {
            throw new Error("Failed to delete users!");
          }
    }
    
    
}