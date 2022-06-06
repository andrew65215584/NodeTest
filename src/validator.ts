import  { NextFunction, Request, Response } from 'express';

export const validate = (schema: any) => {
    return (req : Request, res : Response, next : NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false, allUnknown: false })
        if (error) {
            res.status(400).json({ error })
        } else {
            next()
        }
    }
}