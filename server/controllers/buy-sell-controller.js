const Bank = require("../models/bank-model");
const User = require("../models/user-model");



const BuyGold = async(req, res) => {
    try {
        const buyer = await req.user.email;
        const quantity = await req.body.quantity;

        console.log(buyer);

       const Transaction = await Bank.updateOne(
            {}, // Your query (empty here to match any document)
           { $inc: { 'gold': -quantity } },
           {new: true}// Your update operation
        );

        console.log(Transaction)

        const Transaction2 = await User.findOneAndUpdate(
            { email: buyer },
            { $inc: { 'wallet.goldBalance': quantity } },
        );
        
        if (Transaction && Transaction2) {
            res.status(200).json({ msg: "Transaction Successful"});
        }
        else {
            res.status(400).json({ msg: "Transaction Failed" });
        }

    }
    catch (err) {
        console.error(err);
        res.status(400).json({ msg: err });
    }
}


module.exports =  {BuyGold} ;