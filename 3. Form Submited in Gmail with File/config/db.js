const dotenv=require('dotenv');
require('dotenv').config();
const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.URL);
    console.log("mogodb Connected Sucessfully");
    
} catch (error) {
    console.log(error);
    
}

module.exports=mongoose;