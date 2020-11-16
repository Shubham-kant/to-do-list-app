const mongoose=require('mongoose');
const url=process.env.MONGODB_URI || 'mongodb://localhost/todolistdevelopment';
// mongoose.connect('mongodb+srv://heroku_wjl3mk00:rayoptics1@cluster-wjl3mk00.8ercl.mongodb.net/todolist_development?retryWrites=true&w=majority' || process.env.MONGODB_URI ||'mongodb://localhost/todolist_development');
// mongoose.connect('mongodb+srv://heroku_wjl3mk00:rayoptics1@cluster-wjl3mk00.8ercl.mongodb.net/todolist_development?retryWrites=true&w=majority', {useNewUrlParser:true});
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting to Mongodb'));

db.once('open',function(){
    console.log('Connected to Database:: Mongodb');
});
module.exports=db;