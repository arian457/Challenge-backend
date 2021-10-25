const { verify, sign } = require("jsonwebtoken");
const { config } = require("../../config");

function token_verify(req, res, next) {
  const token = req.headers["authorization"];

  if (typeof token !== "undefined") {
    //split and replace to set data-token
    let bearer = token.split(" ")[1].replace(/['"]+/g, "");
    console.log(bearer);
    req.token = bearer;
    return next();
  }
  return res.status(401).json({
    message: "Invalid credentials verify",
    ok: false,
  });
}

function token_authorization(req, res, next) {
  verify(req.token, config.secret, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({
        message: "Invalid credentials",
        ok: false,
      });
    } else {
      req.user = user;
      return next();
    }
  });
}

function sing_token(user) {
  if (user) {
    let userPipeline = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.role[0] === "normal" ? false : true,
      _id: user._id,
    };

    let token = sign(userPipeline, config.secret, {
      expiresIn: 60 * 60,
    });

    return token;
  }

  return;
}

module.exports = {
  token_verify,
  token_authorization,
  sing_token,
};
