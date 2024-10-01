import httpStatus from "http-status";
import { User } from "../models/user.models.js";
import bcrypt, { hash } from "bcrypt";  // bcrypt is used to hash the password  
import crypto from "crypto"; // crypto is used to generate random token

// user registration
const register = async (req,res) => {
    const {name, username, password} = req.body;

    try{

        // check if user already exists
        const existingUser = await User.findOne({ username });
        if(existingUser){
            return res.status(httpStatus.FOUND).json({message:"User already exists"});
        }

        // Generate hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const user = new User({
            name: name,
            username: username,
            password: hashedPassword
        }); 

        // save user in the database
        await user.save();
        return res.status(httpStatus.CREATED).json({message:"User created successfully"});
    }
    catch(error){
        res.json({message:`Somting went Wrong: ${error}`});
    }
}

// user login
const login = async (req,res) => {
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(httpStatus.BAD_REQUEST).json({message:"Please enter username and password"});
    }

    try{
    
        const user = await User.findOne({username});

        if(!user){
            return res.status(httpStatus.NOT_FOUND).jason({message: "User not found"});
        }

        
        if(await bcrypt.compare(password, user.password)){
            
            let token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();

            return res.status(httpStatus.OK).json({token:token});
        }
    }
    catch(error){
       res.json({message: `somting went wrong: ${error}`});
    }  
}

export { register, login };