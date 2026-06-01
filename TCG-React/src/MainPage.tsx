import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./login.css";
import { Link } from "react-router-dom";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpg";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.jpg";
import logo from "./assets/logo.png";
import alya from "./assets/alya.png"
import pfp from "./assets/pfp.jpg"



function MainPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    return (
        <>
        <div className="main-page"> 
            <button className="menu" onClick={toggleSidebar}>
                ☰
            </button>
        </div>

        <div className={`navbar${isOpen ? ' is-open' : ' is-closed'}`}>
            
            <div className="nav-page">
                <div className="profile">
                    <img src={pfp} alt="Logo" className="logo" />
                    <h2 className="username">Azahi</h2>
                    <button className="back" onClick={toggleSidebar}>
                        →
                    </button>
                </div>
                <hr></hr>
                <nav className="main-nav">
                    <button className="nav-btn">Profile</button>
                    <button className="nav-btn">My characters</button>
                    <button className="nav-btn">Friends list</button>
                    <button className="nav-btn">Messages</button>
                    <button className="nav-btn">Settings</button>
                    <Link to="/" className="log-out">Logout</Link>
                </nav>
            </div>
            
        </div>
        </>
    );
}

export default MainPage