import Db from '../../database';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

export const postUser = (req: Request, res: Response) => {
    const newUser = req.body;
    const userInDb = Db.find(user => user.login === newUser.login);

    if (userInDb) {
        res.status(400).send('User already exyst')
    } else {
        const user = {
            id: uuid(),
            ...newUser
        }

        Db.push(user)
        res.status(201).json(user)
    }
}

