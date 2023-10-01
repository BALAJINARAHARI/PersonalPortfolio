const express = require('express');
const router = express.Router();
router.get('/',(req,res,next)=>{
    res.render('index',{title:'HOME'})
})
router.get('/aboutme',(req,res,next)=>{
    res.render('aboutme',{title:'Aboutme'})
})
router.get('/contactme',(req,res,next)=>{
    res.render('contactme',{title:'Contactme'})
})
router.get('/services',(req,res,next)=>{
    res.render('services',{title:'Services'})
})
router.get('/projects',(req,res,next)=>{
    res.render('projects',{title:'Projects'})
})


module.exports = router;