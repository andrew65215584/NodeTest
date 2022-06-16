import Db from '../../database';
import { Request, Response } from 'express';
import UserServices from '../../services/user';

export const getUsers = async (req: Request, res: Response) => {
    const login = req.query.loginSubstring?.toString();

    if (login) {
        const user = await UserServices.getOneByLogin(login)
        return res.status(200).json(user)
    } else {
        const allUsers = await UserServices.getAll()
        return res.status(200).json(allUsers)
    }
}

