const { ErrorController } = require('./error');
const registerController = require('./register');
const loginController = require('./sign-in');
const meController = require('./me');

module.exports = {
    ErrorController,
    registerController,
    loginController,
    meController
};
