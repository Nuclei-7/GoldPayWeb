const Service = require("../models/service-model");

const services = async (req, res) => {
    try {
        const response = await Service.find();
        if (!response) {
            return res.status(404).json({ msg: "No services found" });
        }

        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = services;