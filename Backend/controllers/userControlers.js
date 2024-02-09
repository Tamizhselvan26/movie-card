import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    // Spliting data from req.bady to multiple varibles
    const { username, email, password } = req.body;

    //   Chicking all fields entered or not
    if (!username || !email || !password) {

        res.status(400).send({message: "please enter all the fields"});
    }
    //  Chicking the user already exists or not
    const userFind = await User.findOne({ email });
    if (userFind) {
        res.status(400).send({message: "User already exists"});
    } else {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        //   Creating user
        const userRegister = await User.create({
            username: username,
            email: email,
            password: hashPassword,
        });

        res.status(200).send(userRegister)
    }
};


export const login = async (req, res) => {
    // Spliting data from req.bady to multiple varibles
    const { email, password } = req.body;
    const userFind = await User.findOne({ email:email });
    if (userFind) {
      const checkPassword = await bcrypt.compare(password, userFind.password)
    
    if(checkPassword){
        const token = await jwt.sign({id:userFind._id}, "students")
        res.status(200).send({token:token})
    }else{
        res.status(400).send("Invalid Password")
    }
    } else {
      res.status(400).send("Invalid email id ");
    }
  };