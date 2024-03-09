import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuth } from "../store/auth";
import "./Register.css";
export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });
    const { serverlink } = useAuth();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
       
        setUser({
            ...user,
            [name]:value,
        });
        
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            const response = await fetch(`${serverlink}api/auth/register`, {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(user),
            });

            
            const res_data = await response.json();
            console.log(res_data);

            
            
            if (res_data.flag) {
                if (response.ok) {
    
                    setUser({
                        username: "",
                        email: "",
                        phone: "",
                        password: "",
                    });
                    toast.success("Registration Successfull");
                    navigate("/login");
                }
            }
            else {
                if (res_data.extraDetails) {
                    toast.error(res_data.extraDetails);
                }
                else {
                    toast.error(res_data.msg);
                }
            }

        } catch (err) {
            console.error("Error:", err);
        }

    };

    return (<>
        <section>
            <main>
               
                    <div className="form-container">
                        <div className="registration-form">
                            <h1>Registration</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                   
                                    <input type="text" name="username" placeholder="Username" id="username" required autoComplete="off" value={user.username } onChange={handleInput} />
                                </div>
                                <div>
                                   
                                    <input type="email" name="email" placeholder="Email" id="email" required autoComplete="off" value={user.email } onChange={handleInput}/>
                                </div>
                                <div>
                                    
                                    <input type="number" name="phone" placeholder="Phone no" id="phone" required autoComplete="off" value={user.phone } onChange={handleInput}/>
                                </div>
                                <div>
                                  
                                    <input type="password" name="password" placeholder="Password" id="password" required autoComplete="off" value={user.password } onChange={handleInput}/>
                                </div>
                                <br />

                                <button type="submit" className="btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
              
            </main>
        </section>
    </>
    );
}
