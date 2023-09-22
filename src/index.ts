import express,{Application, Request, Response} from 'express'
import Database from "./config/database";
import { userRouter } from './userRouter';
class App {
    public app: Application;
    
    // init
  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

    protected routes():void{
        this.app.route("/").get((req:Request, res:Response)=>{
            res.send("Bienvenido a la Libreria")
        });
        this.app.use("/api/v1/users", userRouter);
    }

     // add database sync
    protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
  }

    // add plugin
    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
      }
}

const app = new App().app;
const port: number = 4000;
app.listen(port, () => {
    console.log("✅ Server started successfully!");
  });