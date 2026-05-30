function Login() {
  document.title = "Log-in";
  return(
    <>
      <div className="Login">
        <div className="box">
        <form>
          <h1 className="Log-in">
            ♡ Log-in ♡
          </h1>
          <hr className="line"></hr>
          <div className="Email">
              <label htmlFor="email" className="email">Email</label>
              <input type="text" id="email" className="em" placeholder="E-mail" />
          </div>
          <div className="Password">
              <label htmlFor="password" className="password">Password</label>
              <input type="text" id="password" className="pw" placeholder="Password" />
          </div>
          <button type="submit" className="Submit">
            Submit
          </button>

          <div className="reset">
              <a href="" className="rp">Forgot password? Click here!</a>
          </div>

          <hr className="line"></hr>

          <div className="Signup">
            <p className="sign">Don't have account yet? <span className="sp"><a href="">Sign up here!</a></span></p>
          </div>
          
        </form>
        </div>
      </div>
    </>
  );
}

export default Login