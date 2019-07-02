const Task=require('../models/home.js');
module.exports.home=function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log('error in fetching data');
        }
        console.log(tasks);
        return res.render('home',{
          task_list:tasks
        });
    
    });
};
module.exports.home1=function(req,res){
    // console.log(req.body);
    Task.create(req.body,function(err,newTask){
        if(err){
            console.log('error in creating a task');
            return;
        }
        console.log(newTask);
        return res.redirect('back');
    });
    // return res.redirect('back');
    
};
module.exports.delete_task=function(req,res){
    let  id=req.query.id;
    console.log('*****',req.query);
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting a contact');
            return;
        }
        return res.redirect('back');
    });
    

};