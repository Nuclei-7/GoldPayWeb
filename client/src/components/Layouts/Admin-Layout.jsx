import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
export const AdminLayout = () => {
    return <>
        <header>
            <div className="admin-container">
                <br />
                <br />
                <br />
                <br />
                <br />
                    <ul>
                        <li>
                            
                            <FaUser />
                            <NavLink to="/admin/users">Users</NavLink>
                        </li>
                    <li>
                        <FaUser />
                            <NavLink to="/admin/contacts">Contacts</NavLink>

                        </li>
                    </ul>
                
            </div>
        </header>
        <Outlet/>
    </>
}
