import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");
  const authorizationToken = `Bearer ${token}`;

  const serverlink = "http://localhost:5000/";

  //const serverlink = "https://server.yo-pal.in/";

  let isLoggedIn = !!token;
  //console.log("isLoggedin", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const userAuthentication = async () => {
    if (token) {
      try {
        //console.log(`my token  ${token }`);
        const response = await fetch(`${serverlink}api/auth/user`, {
          method: "GET",
          headers: { Authorization: authorizationToken },
        });
        if (response.ok) {
          const data = await response.json();
          //console.log("success",data.userData);
          setUser(data.userData);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  const getServiceData = async () => {
    const response = await fetch(`${serverlink}api/data/service`, {
      method: "GET",
    });
    if (response.ok) {
      const serviceData = await response.json();
      //console.log(serviceData);
      setServices(serviceData);
    }
  };

  useEffect(() => {
    getServiceData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        authorizationToken,
        serverlink,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
