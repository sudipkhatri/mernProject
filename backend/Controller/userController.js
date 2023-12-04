import user from '../Schema/user.js';
import bycrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signUp = async(req, res, next) =>{
    const{name, email, password} = req.body;
    let existingUser;
    try{
        existingUser = await user.findOne({email});
    }
    catch(error){
        return console.log(error);
    }
    if(existingUser){
        return res.status(400).json({message: 'user exist.'})
    }
    const hashPassword = bycrypt.hashSync(password);
    let newUser;
    try{
        newUser = new user({
            name,
            email,
            password:hashPassword,
            post : [],
        });
        newUser.save();
        
    }
    catch(error){
        return console.log(error);
    }
    return res.status(201).json({ message: "user created", _id: newUser._id });
}

export const login = async(req, res, next) =>{
    const {email, password} = req.body;
    let userDetails; 
    try{
        userDetails = await user.findOne({ email });
    }
    catch(error){
        return console.log(error);
    }
    if(!userDetails){
        return res.status(400).json({message: "bad combination"})
    }
    const plainPass = bycrypt.compareSync(password, userDetails.password);
    if(!plainPass){
        return res.status(400).json({ message: "password incorrect" });
    }
    const token = jwt.sign({
        id: userDetails._id,
    }, "secret");

    return res.status(200).json({message:"login success", token, _id: userDetails._id});
    
}

/* for user details */
export const getAllUsers = async(req, res, next) =>{
    let allUsers;
    try{
        allUsers = await user.find();
    }
    catch(error){
        return console.log(error);
    }
    if(!allUsers){
        return res.status(404).json({message: "no user found"});
    }
    return res.status(200).json({message: "all users", allUsers});
}

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};


