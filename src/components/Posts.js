import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { FaPen } from "react-icons/fa"; // Import pencil icon
import "../css/Posts.css";
import PostCards from "./PostCards";
import RightSection from "./RightSection";

const Posts = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768); // Set initial value based on window size

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Update the state based on window width
        };

        // Add event listener to handle window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleTabSelect = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center mt-5 px-0"
            style={{ margin: "2px", minHeight: "30vh" }}
        >
            <div style={{ width: "100%", maxWidth: "1200px" }}>
                {/* Top Section with Tabs and Buttons */}
                <Row className="border-bottom mb-4 px-0 mx-0">
                    <Col md={9}>
                        {isSmallScreen ? (
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="font-weight-bold">Posts (368)</span>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title="Filter: All Posts"
                                >
                                    <Dropdown.Item onClick={() => handleTabSelect(1)}>
                                        All Posts
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleTabSelect(2)}>
                                        Article
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleTabSelect(3)}>
                                        Event
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleTabSelect(4)}>
                                        Education
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleTabSelect(5)}>
                                        Job
                                    </Dropdown.Item>
                                </DropdownButton>
                            </div>
                        ) : (
                            <Nav
                                variant="pills"
                                activeKey={activeTab}
                                onSelect={handleTabSelect}
                                className="d-flex tabs-container"
                            >
                                <Nav.Item className="mr-4">
                                    <Nav.Link
                                        eventKey={1}
                                        className={activeTab === 1 ? "font-weight-bold" : ""}
                                    >
                                        All Posts(32)
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mr-4">
                                    <Nav.Link
                                        eventKey={2}
                                        className={activeTab === 2 ? "font-weight-bold" : ""}
                                    >
                                        Article
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mr-4">
                                    <Nav.Link
                                        eventKey={3}
                                        className={activeTab === 3 ? "font-weight-bold" : ""}
                                    >
                                        Event
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mr-4">
                                    <Nav.Link
                                        eventKey={4}
                                        className={activeTab === 4 ? "font-weight-bold" : ""}
                                    >
                                        Education
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mr-4">
                                    <Nav.Link
                                        eventKey={5}
                                        className={activeTab === 5 ? "font-weight-bold" : ""}
                                    >
                                        Job
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        )}
                    </Col>
                    <Col md={3} className="d-flex justify-content-end">
                        {!isSmallScreen && (
                            <>
                                <Button
                                    className="button-margin"
                                    style={{
                                        padding: "8px 12px",
                                        fontSize: "14px",
                                        height: "40px",
                                        width: "auto",
                                        backgroundColor: "#EDEEF0",
                                        color: "black",
                                        border: "none",
                                        marginRight: 15,
                                        marginLeft: "-5px",
                                        whiteSpace: "nowrap", // Prevents text wrapping inside the button
                                        overflow: "hidden",  // Prevents overflow
                                        textOverflow: "ellipsis", // Adds ellipsis if text overflows
                                        maxWidth: "200px",  // Max width to prevent overflow
                                    }}
                                >
                                    Write a Post
                                </Button>

                                <Button
                                    className="button-margin"
                                    style={{
                                        padding: "8px 12px",
                                        fontSize: "14px",
                                        height: "40px",
                                        width: "auto",
                                        backgroundColor: "#2F6CE5",
                                        color: "white",
                                        borderRadius: 5,
                                        marginLeft: "-5px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        maxWidth: "200px",
                                    }}
                                >
                                    Join Group
                                </Button>

                            </>
                        )}
                    </Col>
                </Row>

                {/* Content below the tabs: Posts and Location Sections */}
                <Row className="px-0 mx-0">
                    {/* PostCards - Takes full width on small screens */}
                    <Col
                        md={isSmallScreen ? 12 : 8}
                        className={isSmallScreen ? "w-100 px-0" : "border-right pr-3"}
                        style={{ height: "82vh" }}
                    >
                        <div className="post-cards-fixed">
                            <PostCards />
                        </div>
                    </Col>

                    {/* RightSection - Hide on small screens */}
                    {!isSmallScreen && (
                        <Col md={4} className="d-flex flex-column align-items-end">
                            <RightSection />
                        </Col>
                    )}
                </Row>

                {/* Floating Action Button for small screens */}
                {isSmallScreen && (
                    <Button
                        className="fab"
                        style={{
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            background: "linear-gradient(45deg, #FF5C5C, #F0568A)",
                            color: "white",
                            borderRadius: "50%",
                            border: "none",
                            width: "56px",
                            height: "56px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 999,  // Ensure it's in front of other content
                        }}
                    >
                        <FaPen />
                    </Button>
                )}
            </div>
        </Container>
    );
};

export default Posts;
