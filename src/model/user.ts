import joi from 'joi';
import { DataTypes, Model, Optional } from "sequelize"
import { client } from '../services/db';
import { SavedUser } from '../types';

export const userSchema = joi.object({
    login: joi.string().required(),
    password: joi.string().min(7).max(15).required(),
    age: joi.number().min(4).max(130).required(),
    isDeleted: joi.boolean().required()
})

class User extends Model { }


const userFields = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    age: {
        type: DataTypes.STRING
    },
    login: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    isDeleted: {
        type: DataTypes.BOOLEAN
    }
};

const options = {
    tableName: 'Users',
    sequelize: client,
    createdAt: "created_at",
    updatedAt: "updated_at",
};

export const UserModel = User.init<SavedUser, User>(userFields, options)