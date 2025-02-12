const mongoose=require('mongoose');


const userschema= new mongoose.Schema({
name:{type:String,require:true},
age:{type:String,require:true},
email:{type:String,require:true,unique:true}
})

const User=mongoose.model('User',userschema);
module.exports=User;


console.log("models Connect");