import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const Send = () => {


    const {authorizationToken} = useAuth();
    const { serverlink } = useAuth();
   
    const [receiver, SetReceiver] = useState({
        email:"",
        quantity:"",
    });



    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        SetReceiver({
            ...receiver,
            [name]: value,
        });
       // console.log(receiver);
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
       
        try {
            const response = await fetch(`${serverlink}form/send`, {
                method: "POST",
                headers: { 'Authorization': authorizationToken, 'Content-Type' : 'application/json', },
                body: JSON.stringify(receiver),
            });

            const res = await response.json();
           // console.log(res.success);
            
            if (res.success) {
                toast.success(res.msg);
                SetReceiver({
                    email: "",
                    quantity: "",
                });
            }
            else {
                toast.error(res.msg);
            }
        }
        catch (err) {
            console.log(err);
        }

        
    }
    return (<>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="send-box">
            <form onSubmit={ handleSubmit } className="send-form">
                <input type="email" name="email" placeholder="Enter Receiver Email" required onChange={ handleChange} value={receiver.email}/>
                <input type="number" name="quantity" placeholder="Enter Gold in Grams" required onChange={ handleChange} value={receiver.quantity}/>
                
                <button type="submit">Send</button>
            </form>
        </div>
    </>)
}