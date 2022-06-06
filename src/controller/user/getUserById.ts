import Db from '../../database';
import { Request, Response } from 'express';

export const getUserById = (req: Request, res: Response) => {
    const userId = req.params.id;

    const userInDb = Db.find(user => user.id === userId);

    if (userInDb) {
        res.status(200).send(userInDb)
    } else {
        res.status(404).send({ message: 'Such user doesn`t exist' })
    }
}

