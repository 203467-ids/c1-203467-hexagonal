import { Users } from "../../domain/entities/Users";
import { GetUserByIdRepository } from "../../domain/repositories/UsersRepository";

export class GetUserByIdImplements implements GetUserByIdRepository{
    async getUserById(usersId: number): Promise<Users | null> {
        try {
            //  find existing users
            const new_users = await Users.findOne({
              where: {
                id: usersId,
              },
              attributes: ['id', 'name','email']
            });
      
            if (!new_users) {
              throw new Error("Users not found");
            }
            // users data
            return new_users;
          } catch (error) {
            throw new Error("Failed to delete users!");
          }
    }
    

}