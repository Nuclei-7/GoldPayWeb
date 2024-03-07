import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';



export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
       
        setUser({
            ...user,
            [name]:value,
        });
        
    };

    const { storeTokenInLS } = useAuth();
    var { isLoggedIn } = useAuth();
    const { serverlink } = useAuth();

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${serverlink}api/auth/login`, {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(user),
            });

            

            if (response.ok) {
                const res_data = await response.json();

             

                if (res_data.flag) {
                    
                    storeTokenInLS(res_data.token);
                    setUser({
                        email: "",
                        password: "",
                    });
                    
                    
                    toast.success("login Successfull");
                    isLoggedIn = true;
                    navigate("/");
                }

                else {
                       if (res_data.extraDetails) {
                       toast.error(res_data.extraDetails);
                        }
                        else if(res_data){
                        toast.error(res_data.msg);
                     }
                }

                
            }
            
        } catch (err) {
            console.log(err)
        }

    };

    return (<>
        <section>
            <main>
                
                    <div className="form-container">
                        
                        <div className="login-form registration-form">
                            <h1 className="main-heading mb-3">Login form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    
                                    <input type="email" name="email" placeholder="Email" id="email" required autoComplete="off" value={user.email } onChange={handleInput}/>
                                </div>
                                
                                <div>
                                    
                                    <input type="password" name="password" placeholder="Password" id="password" required autoComplete="off" value={user.password } onChange={handleInput}/>
                                </div>
                                <br />

                                <button type="submit" className="btn-submit">Login Now</button>
                            </form>
                        </div>
                    </div>
                
            </main>
        </section>
    </>
    );
}