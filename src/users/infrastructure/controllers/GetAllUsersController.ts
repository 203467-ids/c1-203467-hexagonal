import { Request, Response } from "express";

import { GetAllUsersUseCase } from "../../application/usecases/GetAllUsersUseCase";

export class GetAllUsersController {
  constructor(readonly getAllUsersUseCase: GetAllUsersUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const usersList = await this.getAllUsersUseCase.run();
      res.status(200).json(usersList);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}