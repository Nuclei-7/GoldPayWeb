import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
    const [mes, setMessage] = useState({
        username: "",
        email: "",
        message: "",
    });



    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
       
        setMessage({
            ...mes,
            [name]:value,
        });
       
    };

    
    const [userData, setUserData] = useState(true);
    const { user } = useAuth();
    const { serverlink } = useAuth();
    
    if (userData && user) {
        setMessage({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }
    
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${serverlink}api/form/contact`,
                {
                    method: "POST",
                    headers: { 'Content-Type': "application/json" },
                    body: JSON.stringify(mes),
                }
            );
            if (response.ok) {
                setMessage({
            username: user.username,
            email: user.email,
            message: "",
        });
            }
            

            
        }
        catch (err) {
            console.log(err);
        }

        
    };


    return (
        <>
            <div className="contact-container">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="username" placeholder="username" id="username" required autoComplete="off" value={mes.username } onChange={handleInput}/>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="email" id="email" required autoComplete="off" value={mes.email } onChange={handleInput}/>
                    </div>
                    <div>
                        <textarea name="message" id="message" cols="50" rows="10" autoComplete="off" value={mes.message } onChange={handleInput}></textarea>
                    </div>

                    <button type="submit" className="btn btn-submit">Send Now</button>
                    </form>
                </div> 
                </div>
        </>
    );
};