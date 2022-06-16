import { Request, Response } from 'express';
import UserServices from '../../services/user';

export const deleteUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const userInDb = await UserServices.getOneById(userId);

    if (userInDb) {
        userInDb.isDeleted = true;
        await userInDb.save();
        res.status(200).send(userInDb)
    } else {
        res.status(404).send({ message: 'Such user doesn`t exist' })
    }
}