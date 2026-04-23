const Joi = require("joi");

const schemaValidation = Joi.objects({
    name: Joi.string().messages({"string empty":"The Given name is Empty!"}),
    mobile: Joi.number().required(),
    mobiles: Joi.array().items(
        Joi.string().messages({"string.empty": "Empty String"}),
    ),
    email: Joi.string().email()
});

module.exports= schemaValidation;