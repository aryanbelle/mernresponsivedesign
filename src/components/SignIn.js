import React from "react";
import "../css/Signup.css";
import Illustration from "../assets/modal-illus.png"; // Still kept for larger screens
import { FaRegEye } from "react-icons/fa"; // Eye icons for password visibility toggle
import GoogleIcon from "../assets/google.svg";
import FaceBookIcon from "../assets/fb.svg";

const SignIn = ({ onSwitchToSignUp, isMobile }) => {
  return (
    <div className={`signup-container ${isMobile ? "mobile" : ""}`}>
      {!isMobile && (
        <div className="success-banner">
          Let's connect, share & grow together in the world of computer engineering. Sign in now 🤘🏼
        </div>
      )}

      <div className="signup-content">
        <div className="signup-left">
          <h2 className="create-account"><b>Sign In</b></h2>
          <form className="signup-form">
            <input type="email" className="form-control" placeholder="Email" />
            <div className="password-input position-relative">
              <input type="password" className="form-control pr-5" placeholder="Password" />
              <span className="eye-icon position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
                <FaRegEye />
              </span>
            </div>
            
            <button className="create-account-btn">Sign In</button>
            <div className="optional-signin-link display-none">
              <span style={{ cursor: "pointer" }} onClick={onSwitchToSignUp}>
                or, Create Account
              </span>
            </div>
          </form>

          <button className="social-btn facebook-btn">
            <img src={GoogleIcon} alt="logo" style={{marginRight: "10px"}} height={20} width={20}/>
            Sign in with Facebook
          </button>
          <button className="social-btn google-btn">
            <img src={FaceBookIcon} alt="logo" style={{marginRight: "10px"}} height={20} width={20}/>
            Sign in with Google
          </button>

          {/* Forgot Password Link placed below Google button */}
          <div className="forgot-password-link" style={{marginTop: "20px"}}>
            <center><span style={{ cursor: "pointer" }} onClick={() => alert("Redirect to password reset")}>
              Forgot Password?
            </span></center>
          </div>
        </div>

        <div className={`signup-right ${isMobile ? "mobile" : ""}`}>
          <p className="signin-text">
            Don't have an account?{" "}
            <span className="text-primary" style={{ cursor: "pointer" }} onClick={onSwitchToSignUp}>
              Sign Up
            </span>
          </p>
          {!isMobile && (
            <>
              <img src={Illustration} alt="Sign In Illustration" className="signup-image" />
              <p className="terms-text">
                By signing in, you agree to our <span>Terms & conditions</span>,
                <span> Privacy policy</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
