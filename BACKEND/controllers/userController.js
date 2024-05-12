import User from "../models/userModel.js";

export const signup = async(req,res)=>{
    const {name,email,password} = req.body;
    const user = await User.findOne({email})
    if(user){
        res.status(400).json({message:"User already exists"})
    }
    const newUser = new User({name,email,password})
    try {
        await newUser.save();
        res.status(201).json({message:"User created successfully"})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}
