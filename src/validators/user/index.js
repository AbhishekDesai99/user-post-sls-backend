import 'source-map-support/register';
import Joi from 'joi';

export const joiUserSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().min(18).required(),
    email: Joi.string().email().required(),
});
