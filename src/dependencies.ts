import { CreateUserUseCase } from "./users/application/usecases/CreateUserUseCase";
import { DeleteUserUseCase } from "./users/application/usecases/DeleteUserUseCase";
import { GetAllUsersUseCase } from "./users/application/usecases/GetAllUsersUseCase";
import { GetUserByIdUseCase } from "./users/application/usecases/GetUserByIdUseCase";
import { UpdateUserUseCase } from "./users/application/usecases/UpdateUserUseCase";
import { CreateUserController } from "./users/infrastructure/controllers/CreateUserController";
import { DeleteUserController } from "./users/infrastructure/controllers/DeleteUserController";
import { GetAllUsersController } from "./users/infrastructure/controllers/GetAllUsersController";
import { GetUserByIdController } from "./users/infrastructure/controllers/GetUserByIdController";
import { UpdateUserController } from "./users/infrastructure/controllers/UpdateUserController";
import { CreateUserImplements } from "./users/infrastructure/implements/CreateUserImplements";
import { DeleteUserImplements } from "./users/infrastructure/implements/DeleteUserImplements";
import { GetAllUsersImplements } from "./users/infrastructure/implements/GetAllUsersImplements";
import { GetUserByIdImplements } from "./users/infrastructure/implements/GetUserByIdImplements";
import { UpdateUsersImplements } from "./users/infrastructure/implements/UpdateUsersImplements";

const createUserImplemets = new CreateUserImplements();
const deleteUserImplements =new DeleteUserImplements();
const getAllUsersImplemets = new GetAllUsersImplements();
const getUserByIdImplements =new GetUserByIdImplements();
const updateUsersImplements =new UpdateUsersImplements();

export const createUserUseCase = new CreateUserUseCase(createUserImplemets);
export const deleteUserUseCase = new DeleteUserUseCase(deleteUserImplements);
export const getAllUsersUseCase = new GetAllUsersUseCase(getAllUsersImplemets);
export const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdImplements);
export const updateUserUseCase = new UpdateUserUseCase(updateUsersImplements);

export const createUserController = new CreateUserController(createUserUseCase);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);
export const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);
export const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);
export const updateUserController = new UpdateUserController(updateUserUseCase);