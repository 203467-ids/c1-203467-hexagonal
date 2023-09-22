"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/create", dependencies_1.createUserController.create.bind(dependencies_1.createUserController));
exports.userRouter.delete("/:id", dependencies_1.deleteUserController.delete.bind(dependencies_1.deleteUserController));
exports.userRouter.get("/", dependencies_1.getAllUsersController.run.bind(dependencies_1.getAllUsersController));
exports.userRouter.get("/:id", dependencies_1.getUserByIdController.run.bind(dependencies_1.getUserByIdController));
exports.userRouter.patch("/:id", dependencies_1.updateUserController.update.bind(dependencies_1.updateUserController));
;
