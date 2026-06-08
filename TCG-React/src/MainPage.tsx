import { useState } from "react";
import { Link } from "react-router-dom";
import pfp from "./assets/pfp.jpg"




function MainPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [activeButton, setActiveButton] = useState("home");


    return (
        <>
        <div className="main-page"> 
            <button className="menu" onClick={toggleSidebar}>
                ☰
            </button>
        </div>

        <div className={`home-page${activeButton === "home" ? ' is-active' : ' is-close'}`}>
            <p className="placeholder">This page is currently under construction.</p>
        </div>

        <div className={`character-page${activeButton === "character" ? ' is-active' : ' is-close'}`}>
            <p className="placeholder">This page is currently under construction.</p>
        </div>

        <div className={`wish-page${activeButton === "wish" ? ' is-active' : ' is-close'}`}>
            <p className="placeholder">This page is currently under construction.</p>
        </div>

        <div className={`battle-page${activeButton === "battle" ? ' is-active' : ' is-close'}`}>
            <p className="placeholder">This page is currently under construction.</p>
        </div>

        <div className="topbar">
            <button className={`top-btn ${activeButton === "home" ? "active" : ""}`} onClick={() => setActiveButton("home")}>
                Home
            </button>
            <button className={`top-btn ${activeButton === "character" ? "active" : ""}`} onClick={() => setActiveButton("character")}>
                Characters
            </button>
            <button className={`top-btn ${activeButton === "wish" ? "active" : ""}`} onClick={() => setActiveButton("wish")}>
                Wishlists
            </button>
            <button className={`top-btn ${activeButton === "battle" ? "active" : ""}`} onClick={() => setActiveButton("battle")}>
                Battle!
            </button>
        </div>

        <div className={`navbar${isOpen ? ' is-open' : ' is-closed'}`}>
            
            <div className="nav-page">
                <div className="profile">
                    <img src={pfp} alt="Logo" className="pf" />
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