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
exports.DeleteUserImplements = void 0;
const Users_1 = require("../../domain/entities/Users");
class DeleteUserImplements {
    deleteUser(usersId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //  find existing users
                const new_users = yield Users_1.Users.findOne({
                    where: {
                        id: usersId,
                    },
                });
                if (!new_users) {
                    throw new Error("Users not found");
                }
                // delete
                yield new_users.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete users!");
            }
        });
    }
}
exports.DeleteUserImplements = DeleteUserImplements;
