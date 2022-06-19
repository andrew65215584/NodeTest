import { Request, Response } from 'express';
import UserServices from '../../services/user';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const login = req.query.loginSubstring?.toString();

        if (login) {
            const user = await UserServices.getOneByLogin(login)
            res.status(200).json(user)
        } else {
            const allUsers = await UserServices.getAll()
            res.status(200).json(allUsers)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

