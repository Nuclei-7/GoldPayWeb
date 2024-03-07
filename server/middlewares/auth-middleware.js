const User = require('../models/user-model');
const jwt = require('jsonwebtoken');


const authMiddleware = async (req, res, next) => {
    
    
    
    try {
        const token = req.header("Authorization");
        console.log(token);
        const jwtToken = token.replace("Bearer", "").trim();
        //console.log(jwtToken);
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        //console.log("isVerified", isVerified);

        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });
        req.user = userData;
        next();
        //res.status(200).json({ userData });

    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    }


}

module.exports = authMiddleware;