const Contact = require("../models/contact-model")

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({msg:"message sent successfully"});

    } catch (error) {
        console.log(error);
        return res.status(200).json({msg:"Message not sent" });
    }
};

module.exports = contactForm;