import { Users } from "../../domain/entities/Users";
import { UpdateUserRepository } from "../../domain/repositories/UsersRepository";

export class UpdateUsersImplements implements UpdateUserRepository{
    async updateUser(users: Users): Promise<void> {
        try {
            //  find existing users
            const new_users = await Users.findOne({
              where: {
                id: users.id,
              },
            });
      
            if (!new_users) {
              throw new Error("Users not found");
            }
            // update
            new_users.name = users.name;
            (new_users.username = users.username),
              (new_users.password = users.password),
              (new_users.email = users.email);
      
            await new_users.save();
          } catch (error) {
            throw new Error("Failed to update users!");
          }
    }
    

}