import { Users } from "../../domain/entities/Users";
import { GetAllUsersRepository } from "../../domain/repositories/UsersRepository";

export class GetAllUsersImplements implements GetAllUsersRepository{
    async getAllUsers(): Promise<Users[]> {
      try {
        return await Users.findAll({
          attributes: ['id', 'name','email']
        });
       } catch (error) {
         throw new Error("Error al obtener usuarios!");
       }
}
    

}