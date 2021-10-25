const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'User',
      },
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
    facebookLink:{
      type:String,
      required:"Password is required"
    },
    twitterLink:{
      type:Number,
      required:"Phone is required"
    },
  });
  
const User = mongoose.model( 'Friend' , FriendSchema  );
module.exports = User; 