import { SavedUser, User } from "../types";
import { UserModel } from '../model/user';

class UserServices {

    static async getAll() {
        try {
            const users = await UserModel.findAll()
            return users
        } catch (error) {
            console.log("🚀 ~ file: user.ts ~ line 12 ~ UserServices ~ create ~ error", error)
            throw error.message
        }
    }
    static async getOneByLogin(userLogin: string): Promise<SavedUser | null> {
        try {
            const user = await UserModel.findOne({ where: { login: userLogin } })
            return user
        } catch (error) {
            console.log("🚀 ~ file: user.ts ~ line 12 ~ UserServices ~ create ~ error", error)
            throw error.message
        }
    }

    static async getOneById(id: string): Promise<SavedUser | null> {
        try {
            const user = await UserModel.findByPk(id)
            return user
        } catch (error) {
            console.log("🚀 ~ file: user.ts ~ line 12 ~ UserServices ~ create ~ error", error)
            throw error.message
        }
    }

    static async create(user: User) {
        try {
            const newUser = await UserModel.create(user)
            return newUser
        } catch (error) {
            console.log("🚀 ~ file: user.ts ~ line 12 ~ UserServices ~ create ~ error", error)
            throw error.message
        }
    }
}

export default UserServices