import Joi from "joi";

export const createCustomerSchema= Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(10).max(100).required(),
    phone: Joi.string().min(6).max(30).required(),
    address: Joi.required()
})

export const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    description: Joi.string().min(10).max(100).required(),
    price: Joi.number().required()
})

export const createOrderSchema = Joi.object({
    customerId: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/, 'object Id'),
    productId: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/, 'object Id')
})