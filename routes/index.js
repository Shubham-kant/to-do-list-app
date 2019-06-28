const express=require('express');
const router=express.Router();
// const Task=require('../models/home');
const homeController=require('../controllers/home_controller');

// router.use(express.static('assets'));
router.get('/',homeController.home);
router.post('/create-task',homeController.home1);
router.post('/delete-task',homeController.delete_task);




module.exports=router;