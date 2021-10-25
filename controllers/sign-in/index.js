const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../../models/user.model');

const { sing_token, postLoginValidations } = require("../../middlewares");

router.post('/login', [ postLoginValidations ] , async (req , res )=> {
    const { email , password  } = req.body;
    try {

        const user = await User.findOne({email})

        if(!user){
            return res
                .status(404)
                .json({
                    message:'User not found',
                    error:true,
                    data:null,
                });
            
        };

        let userCompare = bcrypt.compareSync(password, user.password);
        
        if(!userCompare){
            
            return res
                .status(403)
                .json({
                    message:'Revisa los datos',
                    error:true,
                    data:null,
                });
        };

        const token = sing_token(user);
        let dataUser = {
                _id: user._id,
                firstName: user.firstName,
                lastName:user.lastName,
                email: user.email,
                image:user.image,
                role:user.role[0]
            }
        return res
            .status(200)
            .json({
                message: 'tienes acceso',
                error:false,
                token,
                user:dataUser
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                error:true,
                message:"Error de servidor"
            });
    }
});
 

module.exports = router;
