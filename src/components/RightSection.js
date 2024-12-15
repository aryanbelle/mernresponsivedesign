import React from "react";
import { Row, Col, Form, InputGroup, Button, Image } from "react-bootstrap";
import { FaInfoCircle, FaMapMarkerAlt, FaPencilAlt, FaThumbsUp } from "react-icons/fa"; // For icons

const RightSection = () => {
  return (
    <Col md={10}>
      {/* Location Input */}
      <Form.Group className="mb-3" controlId="locationInput">
        <InputGroup className="mb-3">
          <InputGroup.Text style={{ backgroundColor: "transparent", border: "none" }}>
            <FaMapMarkerAlt />
          </InputGroup.Text>
          <Form.Control
            type="text"
            value="Noida, India"
            style={{
              border: "none",
              boxShadow: "none",
              paddingLeft: "5px",
              fontWeight: "bold",
              borderBottom: "1px solid #ddd", // Thin bottom border
              fontSize: "14px",
            }}
          />
          <InputGroup.Text style={{ backgroundColor: "transparent", border: "none" }}>
            <FaPencilAlt />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      {/* Notice Below Location Input */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "40px" }}>
        <FaInfoCircle style={{ fontSize: "30px", marginLeft: "10px", color: "#888" }} />
        <span style={{ fontSize: "14px", color: "#888", marginLeft: "20px" }}>
          Your location will help us serve better and extend a personalised experience.
        </span>
      </div>

      {/* Recommended Users Section */}
      <div style={{ marginTop: "40px" }}>
        {/* Section Header */}
        <div className="d-flex align-items-center mb-3">
          <FaThumbsUp style={{ fontSize: "20px", color: "#888", marginRight: "10px" }} />
          <h5 style={{ margin: 0, fontSize: "16px", color: "#333" }}>Recommended Users</h5>
        </div>

        {/* User List */}
        <div>
          {[1, 2, 3, 4].map((user, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between mb-3"
              style={{
                borderBottom: index !== 3 ? "1px solid #ddd" : "none",
                paddingBottom: "10px",
              }}
            >
              {/* Profile Picture and Username */}
              <div className="d-flex align-items-center">
                <Image
                  src={`https://via.placeholder.com/40`} // Placeholder for PFP
                  roundedCircle
                  style={{ marginRight: "10px" }}
                />
                <span style={{ fontSize: "14px", color: "#333" }}>User {index + 1}</span>
              </div>

              {/* Follow Button */}
              <Button
                style={{
                  fontSize: "14px",
                  backgroundColor: "#EDEEF0",
                  color: "black",
                  border: "none",
                  borderRadius: "20px",
                  padding: "5px 15px",
                }}
              >
                Follow
              </Button>
            </div>
          ))}
        </div>

        {/* See More Option */}
        <div className="d-flex justify-content-end mt-3">
          <a
            href="#see-more"
            style={{
              fontSize: "14px",
              color: "#2F6CE5",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            See More...
          </a>
        </div>
      </div>
    </Col>
  );
};

export default RightSection;
