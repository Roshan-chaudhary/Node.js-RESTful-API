const express=require('express');
const route=express();
const usercontroller=require('../controllers/usercontroller');


route.get('',usercontroller.Roshan);



module.exports =route;


