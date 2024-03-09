import Joi from 'joi'

export const CAR_SCHEMA = Joi.object({
    model: Joi.string().max(225).required(),
    year: Joi.number().required(),
    color: Joi.array().required(),
    type: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
}).required()


export const NEWS_SCHEMA = Joi.object({
    title: Joi.string().max(225).required(),
    description: Joi.string().required(),
}).required()


export const COMMENT_SCHEMA = Joi.object({
    car_id: Joi.string().required(),
    content: Joi.string().required(),
}).required()


export const USERS_SCHEMA = Joi.object({
    username: Joi.string().max(20).required(),
    password: Joi.string().required(),
}).required()