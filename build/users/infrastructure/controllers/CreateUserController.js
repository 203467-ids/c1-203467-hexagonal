"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const Users_1 = require("../../domain/entities/Users");
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, username, email, password } = req.body;
                const newUser = new Users_1.Users();
                newUser.name = name;
                newUser.username = username;
                newUser.email = email;
                newUser.password = password;
                yield this.createUserUseCase.run(newUser);
                return res.status(200).json({
                    status: "Ok!",
                    message: "Successfully created user!",
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    status: "Internal server error!",
                    message: "Internal server error!",
                });
            }
        });
    }
}
exports.CreateUserController = CreateUserController;
