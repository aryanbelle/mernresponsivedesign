import React from "react";
import "../css/Signup.css";
import Illustration from "../assets/modal-illus.png";
import { FaEye, FaRegEye } from "react-icons/fa";

const SignIn = ({ onSwitchToSignUp }) => {
    return (
        <div className="signup-container">
            <div className="success-banner">
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </div>

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
                    </form>

                    <button className="social-btn facebook-btn">
                        🔒 Sign in with Facebook
                    </button>
                    <button className="social-btn google-btn">
                        🔍 Sign in with Google
                    </button>

                    <p className="forgot-password-link mt-4">
                        <a href="/forgot-password" style={{textDecoration: "none", color: "#000"}}><center>Forgot password?</center></a>
                    </p>
                </div>

                <div className="signup-right">
                    <p className="signin-text">
                        Don’t have an account yet?{" "}
                        <span className="text-primary" style={{cursor: "pointer"}} onClick={onSwitchToSignUp}>
                            Create new for free!
                        </span>
                    </p>
                    <img src={Illustration} alt="Sign In Illustration" className="signin-image" />
                    <p className="terms-text">
                        By signing in, you agree to our <span>Terms & conditions</span>,
                        <span> Privacy policy</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
