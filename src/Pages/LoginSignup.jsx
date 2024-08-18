import React, { useState } from "react";
import "./CSS/Loginsignup.css";

const LoginSignup = () => {
  const [pageType, setPageType] = useState("signup"); // default value signup

  const handleLogin = () => {
    setPageType("login");
  };

  const handleSignup = () => {
    setPageType("signup");
  };

  if (pageType === "signup") {
    return (
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="password" placeholder="Your Password" />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={handleLogin}>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to use the terms and privacy policy</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder="Your Email" />
            <input type="password" placeholder="Your Password" />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Don't have an account?{" "}
            <span onClick={handleSignup}>Signup here</span>
          </p>
        </div>
      </div>
    );
  }
};

export default LoginSignup;
