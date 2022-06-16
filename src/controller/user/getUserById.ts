import { Request, Response } from 'express';
import UserServices from '../../services/user';

export const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;

    const userInDb = await UserServices.getOneById(userId);

    if (userInDb) {
        res.status(200).send(userInDb)
    } else {
        res.status(404).send({ message: 'Such user doesn`t exist' })
    }
}

