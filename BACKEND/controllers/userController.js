import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs'

export const signup = async(req,res)=>{
    const {name,email,password} = req.body;
    const user = await User.findOne({email})
    if(user){
        res.status(400).json({message:"User already exists"})
    }
    const hashedPassword =await bcryptjs.hashSync("password",10)
    const newUser = new User({name,email,password:hashedPassword})
    try {
        await newUser.save();
        res.status(201).json({message:"User created successfully",user:{
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        }})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

export const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email})
        const validPassword = await bcryptjs.compareSync("password",user.password)
        if(!user || !validPassword){
            res.status(400).json({message:"Invalid User & password"})
        }else{
            res.status(200).json({message:"User logged in successfully",user:{
                _id: user._id,
                name: user.name,
                email: user.email,
            }})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}
