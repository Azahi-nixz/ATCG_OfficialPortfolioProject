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



function Login() {
  useEffect(() => {
    document.title = "Log-in";
  }, []);

  const imgArr = [img1, img2, img4, img5];
  const colorArr = ["pink" , "red" , "cyan" , "brown"]

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
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  };

  const pageTransition = {
    duration: 0.15,
  };
    
  return (
    
    <motion.div
      className="Login"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      style={{ backgroundImage: `url(${displayImg})`, 
        backgroundSize: '90%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: color}}
    > 
    <div className="pic">
      <img src={logo} alt="Logo" className="logo"/>
    </div>
    
      <div className="box">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="Log-in">
            ♡ Log-in ♡
          </h1>
          <hr className="line" />
          
          <div className="Email">
            <label htmlFor="email" className="email">Email</label>
            <input type="email" id="email" className="em" placeholder="E-mail" />
          </div>
          
          <div className="Password">
            <label htmlFor="password" className="password">Password</label>
            <input type="password" id="password" className="pw" placeholder="Password" />
          </div>
          
          <button type="submit" className="Submit">
            Submit
          </button>

          <div className="reset">
            <a href="#" className="rp">Forgot password? Click here!</a>
          </div>

          <hr className="line" />

          <div className="Signup">
            <p className="sign">
              Don't have an account yet? <span className="sp"><Link to="/signup">Sign Up Here</Link></span>
            </p>
          </div>
        </form>
      </div>

       <div className="alya">
      <img src={alya} alt="Logo" className="logo"/>
      </div>


    <div className="ft">
      <footer className="footer">
        <h1 className="greet">Welcome to ATCG!</h1>
        <hr className="foot"></hr>
        <p className="intro"> This website will collect some information including but not limited to your cookies.
          By logging in or signing-up, you acknowledge and entrust your personal information to the developer of ATCG.
          Thanks for playing!
        </p>
      </footer>
    </div>
    </motion.div>
  );
}

export default Login;