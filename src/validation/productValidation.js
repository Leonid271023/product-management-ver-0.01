import Joi from "joi";

export const productSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    price: Joi.number().positive().required(),
    category: Joi.string().required(),
    quantity: Joi.number().integer().min(0).default(0)
});