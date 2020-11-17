const mongoose=require('mongoose');
const url=process.env.MONGODB_URI || 'mongodb://localhost/todolistdevelopment';

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting to Mongodb'));

db.once('open',function(){
    console.log('Connected to Database:: Mongodb');
});
module.exports=db;