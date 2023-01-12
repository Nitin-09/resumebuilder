// const express =require('express')

// const User=require('../models/User')
// const router =express.Router()
// const { body, validationResult } = require('express-validator');//username and password validator
// const bcrypt =require('bcryptjs');//adding salt paper password hashing
// const jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser');
// const JWT_SECRET='DontStopLearning#'
// let succes=false;

// // Route 1: Create a new user using Post:- localhost:5000/api/auth/createUser
// router.post('/createUser',[
//     body('name','Enter a valid name').isLength({ min: 3 }),
//     body('email','Enter a valid email').isEmail(),
//     body('password','Enter a secure password').isLength({ min: 5 }),
// ],async (req,res)=>{
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({succes, errors: errors.array() });
//     }
//     try{
//     let user=await User.findOne({email: req.body.email});
//     if(user){
//       return res.status(400).json({succes,error: "Email address Already Exists"});
//     }
//     const salt =await bcrypt.genSalt(10)
//     SecPass=await bcrypt.hash(req.body.password,salt)
//     user= await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: SecPass,
//       })
//     const data={
//       user:{
//       id: user.id
//     }}
//     const authtoken=jwt.sign(data,JWT_SECRET)
//     succes=true;
//     res.json({succes,authtoken})
//     }
//     catch(error){
//       console.error(error.message)
//       res.status(500).send({succes,error: "Some error occured"});

//     }
// })

// // Route 2: Authencating user using Post:- localhost:5000/api/auth/login

// router.post('/login',[
//   body('email','Enter a valid email').isEmail(),
//   body('password','Password cannot be blank').exists(),
// ],async (req,res)=>{
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   const {email,password}=req.body
//   try{
//     let user=await User.findOne({email});
//     if(!user){
//       return res.status(400).json({error: "Please try to login with correct credentials."});
//     }
//     const passwordCompare=await bcrypt.compare(password,user.password);
//     if(!passwordCompare){
//       return res.status(400).json({succes,error: "Please try to login with correct credentials."});
//     }
//     const data={
//       user:{
//       id: user.id
//     }}
//     const authtoken=jwt.sign(data,JWT_SECRET)
//     succes=true
//     res.json({succes,authtoken})
//   }    catch(error){
//     console.error(error.message)
//     res.status(500).send("Some error occured");

//   }

// })


// // Route 3: getting user details using Post:- localhost:5000/api/auth/getuser

// router.post('/getuser',fetchuser,async (req,res)=>{
//   try{
//     userID=req.user.id;
//     const user=await User.findById(userID).select("-password");
//     res.send(user)
//   }    catch(error){
//     console.error(error.message)
//     res.status(500).send("Some error occured");

//   }

// })

// module.exports=router