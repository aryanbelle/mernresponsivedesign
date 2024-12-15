import React from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import { FaRegEye, FaShareAlt, FaEllipsisV, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa"; // For the icons
import Card1Image from "../assets/card1img.jpeg";
import Card2Image from "../assets/card2img.jpeg";
import Card3Image from "../assets/card3img.jpeg"; // For the third card

const PostCards = () => {
  return (
    <>
      {/* First Post Card */}
      <Card className="mb-4 post-card" style={{ border: "1px solid #ddd", borderRadius: "8px" }}>
        <Card.Img
          variant="top"
          src={Card1Image}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontSize: "14px", color: "#000", fontWeight: "bold" }}>Article</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title style={{ fontWeight: "bold" }}>Post Title</Card.Title>
            <FaEllipsisV style={{ cursor: "pointer", color: "#555" }} />
          </div>
          <Card.Text style={{ fontSize: "14px", color: "#555" }}>
            This is a short description of the post. It could be a preview of the content.
          </Card.Text>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <Image src="https://via.placeholder.com/40" roundedCircle style={{ marginRight: "10px" }} />
              <span style={{ fontSize: "14px", color: "#333" }}>Username</span>
            </Col>
            <Col md={6} className="d-flex justify-content-end align-items-center">
              <div style={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
                <FaRegEye style={{ marginRight: "5px" }} />
                <span style={{ fontSize: "14px", color: "#555" }}>1.4k views</span>
              </div>
              <Button variant="link" style={{ color: "#000000", backgroundColor: "#EDEEF0" }}>
                <FaShareAlt />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Second Post Card */}
      <Card className="mb-4 post-card" style={{ border: "1px solid #ddd", borderRadius: "8px", marginRight: "15px" }}>
        <Card.Img
          variant="top"
          src={Card2Image}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontSize: "14px", color: "#000", fontWeight: "bold" }}>Education</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title style={{ fontWeight: "bold" }}>Post Title</Card.Title>
            <FaEllipsisV style={{ cursor: "pointer", color: "#555" }} />
          </div>
          <Card.Text style={{ fontSize: "14px", color: "#555" }}>
            This is another description for the second post card. It can describe the content.
          </Card.Text>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <Image src="https://via.placeholder.com/40" roundedCircle style={{ marginRight: "10px" }} />
              <span style={{ fontSize: "14px", color: "#333" }}>Username</span>
            </Col>
            <Col md={6} className="d-flex justify-content-end align-items-center">
              <div style={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
                <FaRegEye style={{ marginRight: "5px" }} />
                <span style={{ fontSize: "14px", color: "#555" }}>1.4k views</span>
              </div>
              <Button variant="link" style={{ color: "#000000", backgroundColor: "#EDEEF0" }}>
                <FaShareAlt />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Third Post Card */}
      <Card className="mb-4 post-card" style={{ border: "1px solid #ddd", borderRadius: "8px", marginRight: "15px" }}>
        <Card.Img
          variant="top"
          src={Card3Image}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontSize: "14px", color: "#000", fontWeight: "bold" }}>Meetup</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title style={{ fontWeight: "bold" }}>Post Title</Card.Title>
            <FaEllipsisV style={{ cursor: "pointer", color: "#555" }} />
          </div>
          <Row className="mb-3">
            <Col md={6} className="d-flex align-items-center">
              <FaCalendarAlt style={{ marginRight: "10px" }} />
              <span style={{ fontSize: "14px"}}>Fri, 12 Oct, 2018</span>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <FaMapMarkerAlt style={{ marginRight: "5px"}} />
              <span style={{ fontSize: "14px" }}>Ahmedabad, India</span>
            </Col>
          </Row>
          <Button variant="outline-light" style={{ width: "100%", borderColor: "#A9AEB8", backgroundColor: "#fff", color: "#E56135", borderRadius: "5px" }}>
            <b>Visit Website</b>
          </Button>
          <Row className="mt-3">
            <Col md={6} className="d-flex align-items-center">
              <Image src="https://via.placeholder.com/40" roundedCircle style={{ marginRight: "10px" }} />
              <span style={{ fontSize: "14px", color: "#333" }}>Username</span>
            </Col>
            <Col md={6} className="d-flex justify-content-end align-items-center">
              <div style={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
                <FaRegEye style={{ marginRight: "5px" }} />
                <span style={{ fontSize: "14px", color: "#555" }}>1.4k views</span>
              </div>
              <Button variant="link" style={{ color: "#000000", backgroundColor: "#EDEEF0" }}>
                <FaShareAlt />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Fourth Post Card */}
      <Card className="mb-4 post-card" style={{ border: "1px solid #ddd", borderRadius: "8px", marginRight: "15px" }}>
        <Card.Body>
          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontSize: "14px", color: "#000", fontWeight: "bold" }}>Job</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title style={{ fontWeight: "bold" }}>Post Title</Card.Title>
            <FaEllipsisV style={{ cursor: "pointer", color: "#555" }} />
          </div>
          <Row className="mb-3">
            <Col md={6} className="d-flex align-items-center">
              <FaBriefcase style={{ marginRight: "10px"}} />
              <span style={{ fontSize: "14px" }}>Job Company Name</span>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <FaMapMarkerAlt style={{ marginRight: "5px" }} />
              <span style={{ fontSize: "14px" }}>Location, India</span>
            </Col>
          </Row>
          <Button variant="outline-light" style={{ width: "100%", borderColor: "#A9AEB8", backgroundColor: "#fff", color: "#02B875", borderRadius: "5px" }}>
            <b>Apply on Timesjobs</b>
          </Button>
          <Row className="mt-3">
            <Col md={6} className="d-flex align-items-center">
              <Image src="https://via.placeholder.com/40" roundedCircle style={{ marginRight: "10px" }} />
              <span style={{ fontSize: "14px", color: "#333" }}>Username</span>
            </Col>
            <Col md={6} className="d-flex justify-content-end align-items-center">
              <div style={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
                <FaRegEye style={{ marginRight: "5px" }} />
                <span style={{ fontSize: "14px", color: "#555" }}>1.4k views</span>
              </div>
              <Button variant="link" style={{ color: "#000000", backgroundColor: "#EDEEF0" }}>
                <FaShareAlt />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCards;