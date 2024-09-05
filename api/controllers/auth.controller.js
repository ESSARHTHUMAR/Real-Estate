import User from "../models/user.models.js"
import bcryptjs from "bcryptjs";
import {errorHandler} from "../utils/error.js"
import jwt from "jsonwebtoken"

const signUp = async (req,res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({username,email,password: hashedPassword})
    try {
        await newUser.save();
        res.status(201).json('User created successfully!')
    } catch (error) {
        next(error)
    }
}

export default signUp

export const singIn = async (req,res,next) => {
    const {email, password} = req.body
    try{
        const validateUser = await User.findOne({email})
        if(!validateUser) return next(errorHandler(404, "The user is not registered!"))
        const validatePassword = bcryptjs.compareSync(password, validateUser.password)
        if(!validatePassword) return next(errorHandler(401, "Wrong credentials."))
        const token = jwt.sign({id: validateUser._id}, process.env.JWT_SECRET)
        const {password: hasedPassword, ...rest} = validateUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest)

    }
    catch (error){
        next(error)
    }
}