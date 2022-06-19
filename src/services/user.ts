import { SavedUser, User } from "../types";
import { UserRepository } from "../repository/user";

class UserServices {
    static async getAll() {
        return await UserRepository.getAll()
    }
    static async getOneByLogin(userLogin: string): Promise<SavedUser | null> {
        return await UserRepository.getOneByLogin(userLogin)
    }
    static async getOneById(id: string): Promise<SavedUser | null> {
        return await UserRepository.getOneById(id)
    }
    static async create(user: User): Promise<SavedUser> {
        return await UserRepository.createOne(user)
    }
    static async delete(user: SavedUser) {
        user.isDeleted = true;
        await user.save();
    }
    static async update(userInDb: SavedUser, user: User) {
        userInDb.login = user.login;
        userInDb.password = user.password;
        userInDb.age = user.age;
        userInDb.isDeleted = user.isDeleted;

        await userInDb.save();
    }
}

export default UserServices;