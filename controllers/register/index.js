const express = require("express")
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../../models/user.model');
const { postRegisterValidations } = require("../../middlewares");

router.post('/register', [postRegisterValidations] , async (req , res  )=> {
    const {
        firstName,
        lastName,
        email,
        password,
    }= req.body;
    
    const saltRounds = 10;

    let newUser = {
        firstName,
        lastName,
        role:"normal",
        email,
        password :bcrypt.hashSync( password , saltRounds)
    }
 
    try {

        const user = await User.create(newUser);
        await user.save()
        return res.status(201).json({
            msg:'register success',
            ok: true,
            ...user
        });
        
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
            ok:false
        });
    };
});
 

module.exports = router;
