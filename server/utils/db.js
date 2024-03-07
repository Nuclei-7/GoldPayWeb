

const mongoose = require('mongoose');

//const URI = "mongodb://localhost:27017/mern_admin";
//const URI = "mongodb+srv://shreekant09:Shreekant0902@gold.80kml56.mongodb.net/mern_admin?retryWrites=true&w=majority";

const URI = process.env.MONGODB_URI;
//mongoose.connect(URI);

const connectDb = async () => {
    try {
       await mongoose.connect(URI);
        console.log("Connection Successfull");
        
    }
    catch(error) {
        console.error(error+"Database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;