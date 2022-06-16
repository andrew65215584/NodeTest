import { Request, Response } from 'express';
import UserServices from '../../services/user';

export const updateUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = req.body;

    const userInDb = await UserServices.getOneById(userId)

    if (userInDb) {
        userInDb.login = user.login;
        userInDb.password = user.password;
        userInDb.age = user.age;
        userInDb.isDeleted = user.isDeleted;

        await userInDb.save();

        res.status(200).send(userInDb)
    } else {
        res.status(404).send({ message: 'Such user doesn`t exist' })
    }
}

