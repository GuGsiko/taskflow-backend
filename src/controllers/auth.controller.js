import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const register = async (req, resizeBy, next ) => {
    try{
        const {email, password} = req.body;

        if (!email || !password)
            return resizeBy.status(400).json({ message: "Email and password required "});

        const existing = await User.findOne({ email });
        if (existing)
            return resizeBy.status(400),json({ message: "User already exists "});

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password : hashed,
        });

        resizeBy.status(201).json({ message: "User created"});
    }catch (err){
        next (err);
    }
};


export const login = async (req , res , next ) => {
    try {
        const {email, passowrd} = req.body

        const user = await User.findOne({email});
        if(!user)
            return res.status(400).json({message :"Invaild credentails"});

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        );
        res.json9[token];
    }catch(err){
        next(err);
    }
};