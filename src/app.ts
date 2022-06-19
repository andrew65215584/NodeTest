import express, { Request, Response, NextFunction, } from 'express';
import apiRouter from './api';
import { connectDb } from './services/db';

const port = 3000;

const app = express();

app.use(express.json());

app.use(apiRouter);

app.use('*', (req, res) => {
    res.send({ error: "No routes matched" });
    res.end();
})

connectDb()

app.listen(port, () => {
    console.log(`Server start on - ${port}`);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})