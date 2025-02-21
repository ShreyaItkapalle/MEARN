// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const user = require('./schema')
// mongoose.connect('mongodb://127.0.0.1:27017/CSE3')
// .then(()=>{console.log('MongoDB connected')}) 
// .catch((err)=>console.log('MongoDB connection Error',err))

// app.use(express.urlencoded({extended:true}))

// app.use(express.static('public'))
// app.get('/',(req,res)=>{
//     return res.sendFile(__dirname+'/public/index.html')
// })
// app.get('/about',(req,res)=>{
//     res.send('here is about page')
// })
// app.get('/register',(req,res)=>{
//     return res.sendFile(__dirname+'/public/register.html')
// })

// app.post('/register',(req,res)=>{
//     const Newuser = new user({
//         Firstname:req.body.FirstName,
//         Lastname:req.body.LastName,
//         password:req.body.password,
//         Email:req.body.Email,
//         UserName:req.body
//     })
//     Newuser.save()
//     .then(()=>{res.send('user saved successfully')})
//     .catch((err)=>res.status(500).send('ERROR SAVING YOUR DATA:'+ err))
// })
// app.get('/login',(req,res)=>{
//     res.sendFile(__dirname+'/public/login.html')
// })
// app.post('/login',(req,res)=>{
//     res.send(`Welcome ${req.user.username}`)
// })
// app.listen(8000,()=>{
//     console.log('http://localhost:8000')
// })