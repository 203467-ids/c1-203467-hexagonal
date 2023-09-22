import express,{Application, Request, Response} from 'express'

class App {
    public app: Application;
    
    constructor(){
        this.app= express();
    }

    protected routes():void{
        this.app.route("/").get((req:Request, res:Response)=>{
            res.send("Bienvenido a la Libreria")
        })
    }
}

const app = new App().app;
const port: number = 8000;
app.listen(port, () => {
    console.log("✅ Server started successfully!");
  });