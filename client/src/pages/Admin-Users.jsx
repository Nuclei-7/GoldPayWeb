import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";



export const AdminUsers = () => {
    const { authorizationToken } = useAuth();
    const { serverlink } = useAuth();
    const [users, setUsers] = useState([]);

    const getAllUsers = async() => {
        try {
            const response = await fetch(`${serverlink}api/admin/users`, {
                method: "GET",
                headers: { 'Authorization': authorizationToken },
            }
            );

            const data = await response.json();
            setUsers(data);
            //console.log(`users ${data}`);
            
        }
        catch (err) {
            console.log(err);
        }
    }

    const deleteUser = async (id) => {
        const response = await fetch(`${serverlink}api/admin/users/delete/${id}`,
            {
                method: 'DELETE',
                headers: { 'Authorization': authorizationToken },
            },
        );
        const data = await response.json();
        if (response.ok) {
            //console.log(response)
            getAllUsers();
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);



    return <>
        <section>
            <div className="user-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Gold</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curUser,index) => {
                         return (
                        <tr key={index}>
                            <td>{ curUser.username}</td>
                            <td>{ curUser.phone}</td>
                            <td>{ curUser.email}</td>
                            <td>Update</td>
                            <td><button onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                                 <td>{curUser.wallet.goldBalance }</td>
                        </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </section>
    </>
   
};