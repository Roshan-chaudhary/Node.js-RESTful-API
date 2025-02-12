const express =require('express');
const app=express();
const dotenv=require('dotenv');
require ('dotenv').config();
const Roshan=require('./config/db');
const userroute=require('./routes/userroute');
const nodemailer=require('nodemailer');
const multer =require('multer');
const fs = require('fs');
const bodyParser=require('body-parser');

// Route 
app.use('/',userroute);

// Body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Email Sender


var to;
var subject;
var body;
var path;



var Storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./uploads')
    
    },
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
    })
    
    
    var upload = multer ({
    storage:Storage
    
    }).single('image');





//app.get('/',(req,res)=>{
 //   res.sendFile('/index.html')
//})
app.post('/sendemail',(req,res)=>{

upload(req,res,function(err){
if(err){
    console.log(err)
    return res.end("Some this is Wrong ")
}
else{

to= req.body.to
subject=req.body.subject
body=req.body.body
path= req.file.path


console.log(body)
console.log(subject)
console.log(body)
console.log(path)



var transporter= nodemailer.createTransport({
service:'gmail',
auth:{

user:'roshan.chaudhary9997@gmail.com',
pass:'abmpwugownqrniwz'


}
})

var mailOption={
from:'roshan.chaudhary9997@gmail.com',
to:to,
subject:subject,
text:body,
attachments:[
{
    path:path
}
]
}
transporter.sendMail(mailOption,function(err,info){
if (err){

    console.log(err)
}else{
    console.log("Email Send " + info.response )
fs.unlink(path,function(err){
if (err){
    return res.end(err)
}
else{

res.send("Email Send Sucessfully");

}


})


}

})
}
})
})




try {
    app.listen(process.env.PORT);
    console.log( "Port Run in " +""+process.env.PORT);
    
} catch (error) {
    console.log(error)
    
}