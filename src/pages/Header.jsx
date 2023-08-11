import React, { useEffect, useState,useContext } from "react";
import "./header.css";
import auth from "./firebase";
import { signOut } from "firebase/auth";
import Sidebar from "./sidebar";
import Store from "./context";
import { Link } from "react-router-dom";

const Header = () => {
  const userEmail = JSON.parse(localStorage.getItem("Email"));
  const [getEmail, setGetEmail] = useState(userEmail);
  const {toggle1} = useContext(Store)

  useEffect(() => {}, [getEmail]);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setGetEmail("");
        localStorage.removeItem("Email");
        window.location.reload();
      })
      .catch((error) => {});
  };

  return (
    <>
    
      <header className="highlight_header" >
            <Link to="/" >
              back to homepage
            </Link>
            <div>
            {getEmail && <span >{getEmail}</span>}
              <button type="submit" onClick={handleLogOut} className="sign-out1">
                Log-out
              </button>      
            </div>             
      </header>
      <br />
      <br />
    </>
  );
};

export default Header;
