import User from "../models/User.js";
import bcrypt from "bcrypt"

export const userRegister=async (req,res)=>{
    console.log(req.body)
    const  {username, email, password}=req.body;
    const user=await User.findOne({email:email})
    if(user){        
        return res.status(404).json({error:"User Already Exist"})
    }
    try{
        const salt=await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(password,salt)
    
        const newUser= new User({
            username ,
            email,
            password:hashedPassword
        })
        await newUser.save()
        res.status(200).json({msg:"User created Successfully"})

    }catch(err){
       console.log(err)
    }  
 }

 export const userLogin= async (req,res)=>{
    try{
        console.log(req.body)
        const {email, password}= req.body;
        const user=await User.findOne({email:email})
        if(!user){
           
            return res.status(404).json({error:"User not found"})
        }
        const isMatch=await bcrypt.compare(password, user.password)
        if(!isMatch){
            return next(createError("401","Incorrect Password"))
        }  
        res.status(200).json(user)
    }catch(err){
        console.log(err)
    }
   
 }