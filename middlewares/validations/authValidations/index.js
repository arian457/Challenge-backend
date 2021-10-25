const { check, validationResult } = require("express-validator");

const User = require('../../../models/user.model');


//? Funcion que se encarga de verificar que las validaciones se cumplan
const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  //? Si se se encuentra un error de validacion, se lanzara un error que luego sera manejado por el 'error handler'
  if (!errors.isEmpty()) {
    const error = {
      message: "Validation error",
      status: 400,
      detail: errors.errors,
    };

    throw error;
  }

  //? Si no hay errores, sigue el flujo al controlador
  next();
};


// prettier-ignore
const _firstNameRequired = check( "firstName","Firstname is required").notEmpty();
const _lastNameRequired = check("lastName", "Lastname is required").notEmpty();
const _emailRequired = check("email", "Email is required").notEmpty();
const _validEmail = check("email", "A valid email is required").isEmail();
const _passwordRequired = check("password", "Password is required").notEmpty();



const postRegisterValidations = [
  _firstNameRequired,
  _lastNameRequired,
  _emailRequired,
  _validEmail,
  _passwordRequired,
  checkValidations,
];
const postLoginValidations = [
  _emailRequired,
  _validEmail,
  _passwordRequired,
  checkValidations
]

module.exports = {
  postRegisterValidations,
  postLoginValidations,
};
