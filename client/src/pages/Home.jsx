import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export const Home = () => {
    const [goldPriceINR, setGoldPriceINR] = useState(null);

    useEffect(() => {
        fetchGoldPrice();
    }, []);

    async function fetchGoldPrice() {
        const apiKey = '6e81a91fde38a144d03e61559cb2534d'; // Replace with your MetalPriceAPI API key

        try {
            const response = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=XAU&currencies=INR`);
            const data = await response.json();

            // Extract gold price in INR from the API response
            const goldPriceINR = data.rates.INR;
            setGoldPriceINR(goldPriceINR);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div className="buy-send-swap">
                <button className="buy-sell">Buy/Sell Gold</button>
                <NavLink to="/send">
                    <button className="send-receive">Send/Receive Gold</button>
                </NavLink>
                <button className="swap-instruments">Swap Instruments</button>
            </div>
            <div>
                <h1>Gold Price in INR: {goldPriceINR}</h1>
            </div>
        </>
    );
};
