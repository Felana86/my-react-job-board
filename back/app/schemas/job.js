const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number().integer().optional(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    company: Joi.string().required(),
    technology: Joi.string().required(),
    locality: Joi.string().required(),
    contract: Joi.string().required(),
    salary: Joi.string().required(),
    user_id: Joi.number().integer().required()
});


module.exports = schema; 
