import React from "react";
import "../css/Signup.css";
import Illustration from "../assets/modal-illus.png"; // Still kept for larger screens
import { FaRegEye } from "react-icons/fa"; // Close icon
import GoogleIcon from "../assets/google.svg";
import FaceBookIcon from "../assets/fb.svg";

const SignUp = ({ onSwitchToSignIn, isMobile, onClose }) => {
  return (
    <div className={`signup-container ${isMobile ? "mobile" : ""}`}>
      
      {!isMobile && (
        <div className="success-banner">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
      )}

      <div className="signup-content">
        <div className="signup-left">
          <h2 className="create-account"><b>Create Account</b></h2>
          <form className="signup-form">
            <div className="form-row">
              <input type="text" className="form-control" placeholder="First Name" />   
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <input type="email" className="form-control" placeholder="Email" />
            <div className="password-input position-relative">
              <input type="password" className="form-control pr-5" placeholder="Password" />
              <span className="eye-icon position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
                <FaRegEye />
              </span>
            </div>
            <input type="password" className="form-control" placeholder="Confirm Password" />
            <button className="create-account-btn">Create Account</button>
            <div className="optional-signin-link display-none"><span style={{ cursor: "pointer" }} onClick={onSwitchToSignIn}>or, Sign In</span></div>
          </form>

          <button className="social-btn facebook-btn">
            <img src={GoogleIcon} alt="logo" style={{marginRight: "10px"}} height={20} width={20}/>
             Sign up with Facebook
          </button>
          <button className="social-btn google-btn">
            <img src={FaceBookIcon} alt="logo" style={{marginRight: "10px"}} height={20} width={20}/>
            Sign up with Google
          </button>
        </div>

          <div className="signup-right">
            <p className="signin-text">
              Already have an account?{" "}
              <span className="text-primary" style={{ cursor: "pointer" }} onClick={onSwitchToSignIn}>
                Sign In
              </span>
            </p>
            <img src={Illustration} alt="Signup Illustration" className="signup-image" />
            <p className="terms-text">
              By signing up, you agree to our <span>Terms & conditions</span>,
              <span> Privacy policy</span>
            </p>
          </div>
      </div>
    </div>
  );
};

export default SignUp;
