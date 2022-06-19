import { Request, Response } from 'express';
import UserServices from '../../services/user';

export const deleteUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const userInDb = await UserServices.getOneById(userId);
        if (!userInDb) throw new Error('Such user doesn`t exist')

        await UserServices.delete(userInDb);
        res.status(200).send(userInDb);

    } catch (error) {
        res.status(500).send(error.message)
    }
}