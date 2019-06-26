const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');

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