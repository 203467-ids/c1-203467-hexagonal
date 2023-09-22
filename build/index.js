"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const userRouter_1 = require("./userRouter");
class App {
    // init
    constructor() {
        this.app = (0, express_1.default)();
        this.databaseSync();
        this.plugins();
        this.routes();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Bienvenido a la Libreria");
        });
        this.app.use("/api/v1/users", userRouter_1.userRouter);
    }
    // add database sync
    databaseSync() {
        var _a;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
    // add plugin
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
}
const app = new App().app;
const port = 4000;
app.listen(port, () => {
    console.log("✅ Server started successfully!");
});
