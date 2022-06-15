import { SavedUSer, User } from "../types";
import { UserModel } from '../model/user';

class UserServices {

    private static async getOne(userLogin: string): Promise<User | null> {
        try {
            const user = UserModel.findOne({ where: { login: userLogin } })
            return user
        } catch (error) {
            console.log("🚀 ~ file: user.ts ~ line 12 ~ UserServices ~ create ~ error", error)
            return error.message
        }
    }

    private static async create(user: User) {
        try {
            const newUser = UserModel.create(user)
            console.log("🚀 ~ file: user.ts ~ line 8 ~ UserServices ~ create ~ newUser", newUser)
            return newUser
        } catch (error) {
            console.log("🚀 ~ file: user.ts ~ line 12 ~ UserServices ~ create ~ error", error)
            return error.message
        }
    }
}

export default UserServices