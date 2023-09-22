"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Bienvenido a la Libreria");
        });
    }
}
const app = new App().app;
const port = 8000;
app.listen(port, () => {
    console.log("✅ Server started successfully!");
});
