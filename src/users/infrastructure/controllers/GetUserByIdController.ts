import { Request, Response } from "express";

import { GetUserByIdUseCase } from "../../application/usecases/GetUserByIdUseCase";

export class GetUserByIdController {
  constructor(readonly UserById: GetUserByIdUseCase) {}

  async run(req: Request, res: Response) {
    const UserId = Number(req.params.id);

    const User = await this.UserById.run(UserId);
    res.status(200).json(User);
  }
}