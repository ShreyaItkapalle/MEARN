const express = require('express') //import express
const app= express() //creating instance for express
const mongoose=require('mongoose')
const user = require('./schema')
const path = require('path')
const passport=require('passport')
const { initializePassport } = require('./passportConfig');


mongoose.connect('mongodb://127.0.0.1:27017/CSE3')  // way to connect to MongoDB
.then(()=>{console.log('MongoDB connected')})
.catch((err)=>console.log('Mongo connection error',err));



app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(session({
    secret:'your_second_key',
    resave :false,
    saveUninitialized : false
}));
initializePassport(passport);
app.use(initialize());
app.use(session());
app.get('/',(req,res)=>{
    return res.sendFile(__dirname+'/public/index.html')
});
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/public/about.html');
});
app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/public/register.html');
})

app.post('/register',(req,res)=>{
    const Newuser = new user({
        Firstname : req.body.Firstname,
        Lastname : req.body.Lastname,
        Email : req.body.Email,
        UserName : req.body.UserName,
        password : req.body.password,
    });
    Newuser.save()
    .then(()=>{res.send('user saved successfully')})
    .catch(err=>res.status(500).send('ERROR SAVING YOUR DATA:'+err.message));
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/public/login.html');
});
app.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),(req,res)=>{
    
    res.send(Welcome ${req.user.UserName});
});
app.listen(8000,()=>{
    console.log('http://localhost:8000')
});