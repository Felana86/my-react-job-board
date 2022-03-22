const Joi = require('joi');

const schema = Joi.object({
    
    id: Joi.number().integer().optional(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().description("user")

});


module.exports = schema; 


