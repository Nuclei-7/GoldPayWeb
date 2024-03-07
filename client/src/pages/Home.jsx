import { NavLink } from "react-router-dom";
import "./Home.css";

export const Home = () => {
    return (
        <>
            <div className="buy-send-swap">
                <button className="buy-sell">
                    Buy/Sell Gold
                </button>
                <NavLink to="/send">
                    <button className="send-receive">Send/Receive Gold</button>
                </NavLink>
                <button className="swap-instruments">
                    Swap Instruments
                </button>
            </div>
        </>
    )
}