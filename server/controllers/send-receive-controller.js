const User = require("../models/user-model");

const Send = async (req, res) => {

    try {

        const eid = await req.body.email;
        const quantity = await req.body.quantity;
        const sender = await req.user.email;
        
        const senderUser = await User.findOne({ email: sender });
        const receiverUser = await User.findOne({ email: eid });
        //console.log(senderUser.wallet.goldBalance);
        if (receiverUser && quantity>0) {
            if (senderUser.wallet.goldBalance > quantity) {
               
                    await User.findOneAndUpdate(
                    { email: eid }, 
                    { $inc: { 'wallet.goldBalance': quantity } }, 
                    )
                
                    
                    await User.findOneAndUpdate(
                        { email: sender }, 
                        { $inc: { 'wallet.goldBalance': -quantity } }, 
                        )
                        
                        res.status(200).json({ msg: "Transaction Successful", success:true });
                        
                    }
                    else {
                        res.status(200).json({ msg: "Insufficient Balance", success:false });
                    }
                    
                }
                else if(quantity<=0){
                    
                    res.status(200).json({ msg: "Quantity Cannot be 0", success:false });
                }
                else {
                    res.status(200).json({ msg: "Invalid Email", success:false });
                 }

        
    } catch (error) {
        res.status(200).json("Transaction Failed");
    }
}


module.exports =  {Send} ;

