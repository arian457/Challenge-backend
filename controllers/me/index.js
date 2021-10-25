const express = require("express");
const router = express.Router();

const User = require('../../models/user.model')

const { token_verify , token_authorization} = require("../../middlewares");

router.get("/me", [token_verify, token_authorization], async (req, res) => {
  const user = await User.findOne({email:req?.user?.email})
  console.log(user);
  res.json(user);
});

module.exports = router;
