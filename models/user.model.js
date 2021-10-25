const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    firstName:{
      type:String,
      required:"First name is required"
    },
    lastName:{
      type:String,
      required:"Last name is required"
    },
    email:{
      type:String,
      required:"Email is required"
    },
    password:{
      type:String,
      required:"Password is required"
    },
    image: {
      type:String,
      default:"https://www.latercera.com/resizer/9fdVzIvyWzfIT8h0BvNyrBX08-Y=/900x600/filters:focal(742x143:752x133)/cloudfront-us-east-1.images.arcpublishing.com/copesa/D4N74RJIENDITAMCARIDA2DXXY.jpg"
    },
    role:{
      type:[
        "admin",
        "normal",
      ],
      required:"Role is required",
      default:"normal"
  },

  });
  
const User = mongoose.model( 'User' , UserSchema  );
module.exports = User; 