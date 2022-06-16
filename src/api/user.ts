import express from 'express';
import { validate } from '../validator';
import { userSchema } from '../model/user';
import { postUser } from '../controller/user/postUser';
import { getUsers } from '../controller/user/getUsers';
import { getUserById } from '../controller/user/getUserById';
import { updateUserById } from '../controller/user/updateUserById';
import { deleteUserById } from '../controller/user/deleteUserById';

const router = express.Router();

router.post('/', validate(userSchema), postUser)
router.get('/', getUsers)

router.get('/:id', getUserById)
router.put('/:id', validate(userSchema), updateUserById)
router.delete('/:id', deleteUserById)


export default router;
