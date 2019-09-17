import * as express from "express";
import * as morgan from "morgan";
import {router} from "./routes/routes"
import { applyMiddleware } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();        
    }

    private config(): void{
        this.app.use(morgan("dev"));
        applyMiddleware(middleware, router);
        applyMiddleware(errorHandlers, router);

        this.app.use(router)
        
    }

}

export default new App().app;