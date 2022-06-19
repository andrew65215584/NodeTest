import { Request, Response } from 'express';
import UserServices from '../../services/user';

export const getUserById = async (req: Request, res: Response) => {
    try {
        const userInDb = await UserServices.getOneById(req.params.id);
        if (!userInDb) throw new Error('Such user doesn`t exist');

        res.status(200).send(userInDb)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

