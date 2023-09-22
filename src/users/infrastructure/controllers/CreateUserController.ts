import { Request, Response } from "express";

import { CreateUserUseCase } from "../../application/usecases/CreateUserUseCase";
import { Users } from "../../domain/entities/Users";

export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) {}
  
  async create(req: Request, res: Response) {
    try{
    const { name, username, email, password } = req.body;
    const newUser= new Users()
    newUser.name=name;
    newUser.username=username;
    newUser.email=email;
    newUser.password=password;
    await this.createUserUseCase.run(newUser);
    return res.status(200).json({
        status: "Ok!",
        message: "Successfully created user!",
      });
    } catch (error) {
     console.log(error)
      return res.status(500).json({
        status: "Internal server error!",
        message: "Internal server error!",
      });
    }
    
  }
}