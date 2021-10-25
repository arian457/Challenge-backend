const {config} = require('./config');
const express = require('express');
const cors = require("cors");
const createError = require("http-errors");

const { ErrorController ,
     registerController,
    loginController,
    meController
} = require('./controllers');

const app = express();
const connectdb = require('./db')
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api", [
    registerController,
    loginController,
    meController
])

// catch 404 and forward to error handler
app.use(async (req,res,next) => {
    next(createError(404) )
});
app.use(ErrorController);

app.listen('3001' , async ()=> {
    try {
        console.log('Upload in localhost:3001'); 
      await connectdb( config.devUrl);
    } catch (error) {
       console.log(error); 
    };
})







