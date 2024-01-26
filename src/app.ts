import express, { Request, Response, NextFunction} from "express";

import router from "./routes/todo";
import { json } from "body-parser";

const app = express();
app.use(json())

app.use('/todo', router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})

app.listen(3100)