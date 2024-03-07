import { NavLink } from "react-router-dom";

export const Error = () => {
    return (<>
        <section id="error-page">
            <div className="container content">
                <h2 className="header">404</h2>
                <h4>Sorry! Page not found</h4>
                <p>Opps! It seems ike the page you are trying to access doesn't exist.</p>
                <div className="btns">
                    <NavLink to="/">Return Home</NavLink>
                    <NavLink to="/contact">Report Problem</NavLink>

                </div>
            </div>
        
        </section>
    </>);
};