import { Request, Response } from "express";

import { DeleteUserUseCase } from "../../application/usecases/DeleteUserUseCase";

export class DeleteUserController {
  constructor(readonly deleteUserUseCase: DeleteUserUseCase) {}

  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await this.deleteUserUseCase.run(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted user!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "user no eliminado!",
      });
    }
  }
}