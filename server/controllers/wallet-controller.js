const User = require("../models/user-model");

const wallet = async (req, res) => {
    try {
        //Getting Users email Id
        //const {email}  = req.body;
        const email = await req.user.email;
        /*
        const balance = await User.findOne({email });
        if (!balance) {
            return res.status(404).json({ msg: "No user found" });
        }
        else{
            */
           //Getting User Balance
            const data  = await User.findOne({email},{wallet:1});
            return res.status(200).json(data.wallet);
        //}
    }
    catch (err) {
        console.log(err);
        return res.status(201).json({msg: "Something went wrong"});
    }
}

module.exports = {wallet};