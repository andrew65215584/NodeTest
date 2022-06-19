import { Request, Response } from 'express';
import UserServices from '../../services/user';

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const user = req.body;

        const userInDb = await UserServices.getOneById(userId);
        if (!userInDb) throw new Error('Such user doesn`t exist');

        await UserServices.update(userInDb, user);
        res.status(200).send(userInDb);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

