import {Users} from "../entities/Users";

  export interface GetUserByIdRepository {
    getUserById(userId: number): Promise<Users | null>;
  }
  export interface GetAllUsersRepository {
    getAllUsers(): Promise<Users[]>;
  }
  export interface CreateUserRepository {
    newUser(user: Users): Promise<void>;
  }
  export interface UpdateUserRepository {
    updateUser(user: Users): Promise<void>;
  }
  export interface DeleteUserRepository {
    deleteUser(userId: number): Promise<void>;
  }
  