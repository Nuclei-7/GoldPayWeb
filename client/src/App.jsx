import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { Register } from "./pages/Register";
import { Contact } from "./pages/Contact";
import { NavBar } from "./components/NavBar";
import { Logout } from "./pages/Logout";
import { Services } from "./pages/Services";
import { AdminLayout } from "./components/Layouts/Admin-Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { Send } from "./pages/Send";
import { Wallet } from "./pages/Wallet";

import { Trade } from "./pages/Trade";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/send" element={<Send />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
          <Route path="*" element={<Error />} />
          <Route path="/trade" element={<Trade />} />
          <Route path = "/Wallet" element= {<Wallet/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
