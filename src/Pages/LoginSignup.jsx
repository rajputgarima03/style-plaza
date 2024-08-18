import React, { useState } from "react";
import "./CSS/Loginsignup.css";
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [pageType, setPageType] = useState("signup"); // default value signup
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = () => {
    setError(null);
    setSuccess(null);
    setPageType("login");
  };

  const handleSignup = () => {
    setError(null);
    setSuccess(null);
    setPageType("signup");
  };
  const generateRandomId = () => {
    return Math.floor(Math.random() * 100); // Generates a random ID between 0 and 99999
  };

  const doSignup = async () => {
    console.log("------hihihih")
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (!agreed) {
      alert('You must agree to the terms and privacy policy');
      return;
    }

    const userData = {
      id: generateRandomId().toString(),
      name,
      email,
      password
    };

    try {
      const response = await fetch('http://192.168.29.20:8080/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      console.log("--------respoons", response)
      // const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }
      else {
        setSuccess('Signup successful!'); // Use the message from the API or a default one
        setError(null); // Clear any previous errors
        navigate('/')
      }

    } catch (error) {
      console.error('Error during signup:', error);
      setError('Something went wrong during Signup. Please try again.');
      setSuccess(null);
    }
  };


  const doLogin = async () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    const userData = {
      email,
      password
    };

    try {
      const response = await fetch('http://192.168.29.20:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      console.log("--------respoons", response)
      // const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }
      else {
        setSuccess('Login successful!'); 
        setError(null); // Clear any previous errors
        navigate('/')
      }

    } catch (error) {
      console.error('Error during signup:', error);
      setError('Something went wrong during Login. Please try again.');
      setSuccess(null);
    }
  }

  if (pageType === "signup") {
    return (
      <div className="loginsignup">
        <div className="loginsignup-container">
          {/* Display Error or Success Message */}
          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
          {success && <p className="success-message" style={{ color: 'green' }}>{success}</p>}
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={() => { doSignup() }}>Continue</button>
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={handleLogin}>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)} />
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
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={() => { doLogin() }}>Continue</button>
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
