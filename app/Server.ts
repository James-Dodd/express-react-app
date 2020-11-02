import {Express, Request, Response} from "express";
import express from "express";
import * as path from "path";
import resultComp from "./resultcomp";

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.use(express.static(path.resolve("./") + "/build/frontend"));

        this.app.get("/api", (req: Request, res: Response): void => {
            res.send("You have reached the API!");
        });

        this.app.get("/dodd", (req: Request, res: Response): void => {
            res.send("You have reached the Easter Egg");
        });

        this.app.get("*", (req: Request, res: Response): void => {
            res.sendFile(path.resolve("./") + "/build/frontend/index.html");
        });

        this.app.post("/analysis", (req: Request, res: Response): void => {
            let result = resultComp((req.body.value).toLowerCase());
            res.send(result);
        })
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}

