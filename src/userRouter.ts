import express from "express";

import {
    createUserController,
    deleteUserController,
    getAllUsersController,
    getUserByIdController,
    updateUserController,
} from "./dependencies";

export const userRouter = express.Router();

userRouter.post("/create",createUserController.create.bind(createUserController));
userRouter.delete("/:id",deleteUserController.delete.bind(deleteUserController))
userRouter.get("/", getAllUsersController.run.bind(getAllUsersController));
userRouter.get("/:id", getUserByIdController.run.bind(getUserByIdController));
userRouter.patch("/:id",updateUserController.update.bind(updateUserController));
;