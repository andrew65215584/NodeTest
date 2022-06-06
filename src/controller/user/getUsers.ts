import Db from '../../database';
import { Request, Response } from 'express';

export const getUsersOrWithQuery = (req: Request, res: Response) => {
    const suggest = req.query.loginSubstring?.toString();

    if (suggest) {
        res.status(200).json({
            users: Db.filter(user => user.login.includes(suggest))
        })
    }
    res.status(200).json({ users: Db })
}

