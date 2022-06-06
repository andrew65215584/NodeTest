import joi from 'joi';

export const userSchema = joi.object({
    login: joi.string().required(),
    password: joi.string().min(7).max(15).required(),
    age: joi.number().min(4).max(130).required(),
    isDeleted: joi.boolean().required()
})