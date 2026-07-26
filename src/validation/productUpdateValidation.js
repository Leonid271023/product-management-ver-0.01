import Joi from "joi";
const productUpdateValidation = Joi.object({
    name: Joi.string(),
    price: Joi.number().positive(),
    category: Joi.string(),
    quantity: Joi.number().integer().min(0)
}).min(1)