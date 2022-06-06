import express from 'express';
import apiRouter from './api';

const port = 3000;

const app = express();

app.use(express.json());



app.use(apiRouter);

app.on('request', (req, res) => {
    req.on('error', (error) => console.log(`request error - ${error}`))
    res.on('error', (error) => console.log(`response error - ${error}`))
}).on('error', (error) => console.log(`server error - ${error}`))

app.listen(port, () => {
    console.log(`Server start on - ${port}`);
});