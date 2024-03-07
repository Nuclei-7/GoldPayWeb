
const User = require("../models/user-model");
const bycrypt = require("bcryptjs");



const home = async (req, res) => {
    try {
        res.status(200).send("Hey buddy");
    }
    catch (error) {
        console.log(error);
    }
}



const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(422).json({ msg: "email already exists" });
        }
        
        else {
            
            const userCreated = await User.create({ username, email, phone, password });
            
            res.status(201).json({ flag: true, msg: "registration successfull", token: await userCreated.generateToken(), userId: userCreated._id.toString(),});
            
        }

        //const saltRound = 10;
        //const hash_password = await bycrypt.hash(password, saltRound);

        
    }
    catch (err) {
        next(err);
        //res.status(400).send({ msg: "page not found" });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        //console.log(userExist)

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(200).json({ msg: "Invalid Credentials" });
        }

        const user = await userExist.comparePassword(password);
        //console.log(userExist);
        
        if (user) {
            res.status(200).json({ msg: "Login successfull", token: await userExist.generateToken(), flag: true, userId: userExist._id.toString(),});
        
        } else {
            res.status(401).json({ msg: "Invalid email or password", flag: false });
        }

    } catch (err) {
        console.error(err);
    }
}


const user = async (req, res) => {
    try{
        const userData = req.user;
        console.log("userdata from auth controller", userData);
        
    }
    catch(err) {
        res.status(201).json({ message: "auth controller Error", err });
    }
}




module.exports = { home, register, login, user };