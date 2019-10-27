const express=require('express');
const port=process.env.PORT || 8000;
const app=express();
const db=require('./config/mongoose');
// const Task=require('./models/home');
var $=require('jquery');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');




app.listen(port,function(err){
    if(err){
        console.log(`error is : ${err}`);
    }
    console.log(`the port number is : ${port}`);
});