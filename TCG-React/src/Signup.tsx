import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./login.css";
import { Link } from "react-router-dom";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpg";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.jpg";
import logo from "./assets/logo.png";
import alya from "./assets/alya.png";

function Signup() {
  useEffect(() => {
    document.title = "Sign-up";
  }, []);

  const imgArr = [img1, img2, img4, img5];
  const colorArr = ["pink", "red", "cyan", "brown"];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImgIndex((prevIndex) => {
        if (prevIndex === imgArr.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 10000);

    return () => clearInterval(imageTimer);
  }, [imgArr.length]);

  const displayImg = imgArr[currentImgIndex];
  const color = colorArr[currentImgIndex];

  const pageVariants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  const pageTransition = {
    duration: 0.15,
  };

  return (
    <motion.div
      className="signup-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        backgroundImage: `url(${displayImg})`,
        backgroundSize: "90%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: color,
      }}
    >
      
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      
      <div className="form-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="form-title">♡ Sign-up ♡</h1>
          <hr className="divider-line" />

          <div className="input-group">
            <label htmlFor="email" className="field-label">Email</label>
            <input type="email" id="email" className="field-input" placeholder="E-mail" />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="field-label">Password</label>
            <input type="password" id="password" className="field-input" placeholder="Password" />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>

         
          <div className="checkbox-container">
            <input type="checkbox" id="check" className="checkbox-input" />
            <label htmlFor="check" className="tos-label">
              I agree to the Terms of Service.
            </label>
          </div>

          <hr className="divider-line" />

          <div className="redirect-container">
            <p className="redirect-text">
              Already have an account?{" "}
              <span className="redirect-link">
                <Link to="/">Log In Here</Link>
              </span>
            </p>
          </div>
        </form>
      </div>

  
      <div className="character-container">
        <img src={alya} alt="Character" className="logo-img" />
      </div>

      {/* Info Banner Footer */}
      <div className="footer-container">
        <footer className="footer-content">
          <h1 className="footer-heading">Welcome to ATCG!</h1>
          <hr className="footer-divider" />
          <p className="footer-text">
            This website will collect some information including but not limited to your cookies. 
            By logging in or signing up, you acknowledge and consent to the collection of your data by the developer of ATCG. 
            Thanks for playing!
          </p>
        </footer>
      </div>
    </motion.div>
  );
}

export default Signup;