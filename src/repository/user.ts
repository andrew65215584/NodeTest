import { SavedUser, User } from '../types';
import { UserModel } from '../model/user';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export class UserRepository {
    static async getAll(): Promise<SavedUser[]> {
        return await UserModel.findAll()
    }

    static async getOneByLogin(userLogin: string) {
        console.log("🚀 ~ file: user.ts ~ line 10 ~ UserRepository ~ getOneByLogin ~ userLogin", userLogin)
        return await UserModel.findAll({ where: { login: { [Op.like]: `%${userLogin}%` } } })
    }

    static async getOneById(id: string) {
        return await UserModel.findByPk(id)
    }

    static async createOne(user: User) {
        return await UserModel.create(user)
    }
}