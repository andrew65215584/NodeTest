import { Request, Response } from 'express';
import UserServices from '../../services/user';

export const postUser = async (req: Request, res: Response) => {
   try {
       const newUser = req.body;
       const userInDb = await UserServices.getOneByLogin(newUser.login)
       if (userInDb) {
           res.status(400).send('User already exyst')
       } else {
           const savedUser = await UserServices.create(newUser)
           res.status(201).json(savedUser)
       }
   } catch (error) {
    
   }
}

