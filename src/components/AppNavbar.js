import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Container, Modal, Button } from "react-bootstrap";
import logo from "../assets/whole.png";
import "../css/AppNavbar.css"; // Add custom CSS for sliding-up popup
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { FaTimes, FaTimesCircle } from "react-icons/fa"; // Import close icon from react-icons

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false); // State for Modal
  const [showPopup, setShowPopup] = useState(false); // State for Popup on small screens
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768); // Check for small screens

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCreateAccountClick = () => {
    if (isSmallScreen) {
      setShowPopup(true); // Show the popup on small screens
    } else {
      setShowModal(true); // Show modal on larger screens
    }
  };

  // Close the modal or popup
  const closeModal = () => setShowModal(false);
  const closePopup = () => setShowPopup(false);

  const [isSignUp, setIsSignUp] = useState(true);

  const switchToSignIn = () => {
    setIsSignUp(false);
  };

  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <>
      <Navbar bg="white" expand="lg" className="shadow-sm py-2">
        <Container className="px-5 align-items-center">
          {/* Logo at Left */}
          <Navbar.Brand href="#logo">
            <img src={logo} alt="Logo" style={{ height: "24px" }} />
          </Navbar.Brand>

          {/* Toggle Button (Only for Mobile) */}
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0 d-lg-none" />

          {/* Navbar Content */}
          <Navbar.Collapse id="navbarScroll" className="justify-content-between">
            {/* Centered Search Bar */}
            <Form
              className="d-lg-flex mx-auto text-center w-100 mt-3 mt-lg-0"
              style={{ maxWidth: "600px" }}
            >
              <FormControl
                type="search"
                placeholder="Search for your favorite groups in ATG"
                className="rounded-pill py-2 border-0 px-3 mx-auto"
                style={{
                  backgroundColor: "#F2F2F2",
                  height: "42px",
                  width: "90%",
                }}
                aria-label="Search"
              />
            </Form>

            {/* Right Side: Create Account Link */}
            <Nav className="mt-3 mt-lg-0 text-center">
              <span
                className="text-dark"
                style={{
                  fontSize: "14px", // Default font size
                  whiteSpace: "nowrap", // Prevent text from wrapping
                }}
              >
                Create Account,{" "}
                <a
                  href="#signup"
                  className="text-primary fw-bold text-decoration-none"
                  onClick={handleCreateAccountClick}
                  style={{
                    fontSize: "14px", // Adjust font size for smaller screens
                  }}
                >
                  It's Free!
                </a>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for larger screens */}
      {isSmallScreen === false && (
        <Modal
          show={showModal}
          onHide={closeModal}
          centered
          size="lg"
          className="custom-signup-modal"
        >
          <Modal.Body className="p-0 position-relative">
            {/* Close Icon for Modal (Only visible on larger screens) */}
            <FaTimes
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                cursor: "pointer",
              }}
            />
            {isSignUp ? (
              <SignUp onSwitchToSignIn={switchToSignIn} />
            ) : (
              <SignIn onSwitchToSignUp={switchToSignUp} />
            )}
          </Modal.Body>
        </Modal>
      )}

      {/* Popup for small screens */}
      {isSmallScreen && (
        <div className={`popup-container ${showPopup ? "show-popup" : ""}`}>
          {/* Close Icon for Popup (Only visible on small screens) */}
          <FaTimesCircle
            onClick={closePopup} // Close the popup when clicked
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
          {/* Sign-In / Sign-Up Form will be here */}
          {isSignUp ? (
            <SignUp onSwitchToSignIn={switchToSignIn} isMobile={true} onClose={closePopup} />
          ) : (
            <SignIn onSwitchToSignUp={switchToSignUp} isMobile={true} onClose={closePopup} />
          )}
        </div>
      )}
    </>
  );
};

export default AppNavbar;
