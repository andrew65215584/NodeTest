import express, { Request, Response } from 'express';
import apiRouter from './api';

const port = 3000;

const app = express();

app.use(express.json());



app.use(apiRouter);

app.use('*', (req, res) => {
    res.send({ error: "No routes matched" });
    res.end();
})

app.listen(port, () => {
    console.log(`Server start on - ${port}`);
});