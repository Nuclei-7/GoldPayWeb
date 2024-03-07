const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res)=>{
    try {
        const users = await User.find({}, { password: 0});
        if (!User || User.length === 0) {
            return res.status(404), json({ message: "No user found" });
        }
        return res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
    }
}

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!Contact || Contact.length === 0) {
            res.status(200).json({ message: "No Messages Found" });
        }
        return res.status(200).json(contacts);
    }
    catch (err) {
        console.log(err);
    }
}

const deleteUserById = async (req, res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        res.status(200).json({ message: "userDeleted" });
    }
    catch (error) {
        next(error);
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
};

module.exports = {getAllUsers, getAllContacts, deleteUserById, getUserById};