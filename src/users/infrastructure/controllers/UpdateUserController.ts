import { Request, Response } from "express";

import { UpdateUserUseCase } from "../../application/usecases/UpdateUserUseCase";
import { Users } from "../../domain/entities/Users";


export class UpdateUserController {
    constructor(readonly updateUserUseCase: UpdateUserUseCase) {}

async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const { name, username, email, password } = req.body;
      const newUser= new Users();

    newUser.id = id;
    newUser.name=name;
    newUser.username=username;
    newUser.email=email;
    newUser.password=password;
     

      await this.updateUserUseCase.run(newUser);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated task data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "tarea no encontrada!",
      });
    }
  }}