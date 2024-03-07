import { useAuth } from "../store/auth";

import "./Wallet.css";
import { useEffect, useState } from "react";
export const Wallet = () => {


const {serverlink}= useAuth();
const {user} = useAuth();
const {authorizationToken} = useAuth();

console.log("user data",user);
const [balance, setBalance]=useState({
  inr:"",
  gold:"",
  silver:""
});



  const getBalance = async ()=>{

    try {
            const response = await fetch(`${serverlink}api/gold/wallet`, {
                method: "POST",
                headers: {'Authorization': authorizationToken, 'Content-Type' : 'application/json'},
                
            });
            
            if (response.ok) {
                var res_data = await response.json();
                
                setBalance({
                  inr:res_data.inrBalance,
                  gold:res_data.goldBalance,
                  silver:res_data.silverBalance
                })
                console.log(balance.silver);

            }
          }catch(err){
              console.error(err)
          }
  }
useEffect(() => {
    getBalance();
}, []);

  return (
    <>
      <div className="balance-section" style={{ background: 'linear-gradient(to bottom right, gold, #ffd700)' }}>
        <h2>Balances</h2>
        <div className="balance-details">
          <div className="balance">
            <h3>Gold</h3>
            <p>{balance.gold} gm</p>
          </div>
          <div className="balance">
            <h3>Silver</h3>
            <p>{balance.silver} gm</p>
          </div>
          <div className="balance">
            <h3>INR</h3>
            <p>₹ {balance.inr}</p>
          </div>
        </div>
      </div>

      <div className="tab-content" id="deposit">
        <h2>Deposit</h2>
        <div className="deposit-options">
          <img src="upi-icon.png" alt="UPI" />
          <img src="netbanking-icon.png" alt="Net Banking" />
          <img src="credit-card-icon.png" alt="Credit/Debit Card" />
        </div>
      </div>

      <div className="tab-content" id="withdraw">
        <h2>Withdraw</h2>
      </div>
    </>
  );
};
