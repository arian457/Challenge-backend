const {
    postLoginValidations,
    postRegisterValidations
} = require('./validations');

const {
    sing_token,
    token_authorization,
    token_verify
} = require('./token');


module.exports = {

    //validations
    postLoginValidations,
    postRegisterValidations,

    //token
    sing_token,
    token_authorization,
    token_verify
};
