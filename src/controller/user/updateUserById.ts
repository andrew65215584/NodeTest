import Db from '../../database';
import { Request, Response } from 'express';

export const updateUserById = (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = req.body;

    const userInDb = Db.find(user => user.id === userId);

    if (userInDb) {
        userInDb.login = user.login;
        userInDb.password = user.password;
        userInDb.age = user.age;
        userInDb.isDeleted = user.isDeleted;

        res.status(200).send(userInDb)
    } else {
        res.status(404).send({ message: 'Such user doesn`t exist' })
    }
}

