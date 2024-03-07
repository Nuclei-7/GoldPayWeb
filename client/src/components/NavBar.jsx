import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../store/auth";

export const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo-brand">
            <NavLink to="/">
              <div className="logo">
                <img src="./images/logo.png" alt="" width="40px" />
                <h2> Auruma - Gold Pay </h2>
              </div>
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
               <li><NavLink to="/wallet">Wallet</NavLink></li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/trade">Trade</NavLink>
              </li>
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}

              <li>
                <div className="dropdown">
                  <img
                    className="profile-icon"
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                  />

                  <div className="dropdown-content">
                    <a href="profile.html">Profile</a>
                    <a href="wallet.html">Wallet</a>
                    <a href="transaction.html">Transactions</a>
                    <a href="settings.html">Settings</a>
                    <a href="login.html">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
