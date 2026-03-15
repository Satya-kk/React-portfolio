import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BookingHouse from "../../Assets/Projects/BookingHouse.png";
import Spotify from "../../Assets/Projects/Spotify.png";
import ProjectManagement from "../../Assets/Projects/ProjectManagement.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"  }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookingHouse}
              isBlog={false}
              title="BookingHouse"
              description="A travel accommodation web application that allows users to explore and list unique stays across destinations. Built with a modern full-stack architecture, it includes property listings, search functionality, pricing per night, and a responsive, user-friendly interfacex."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Spotify (Clone)"
              description="A frontend-only implementation of a Spotify-inspired music streaming interface, featuring playlist views, navigation panels, and a responsive layout built with modern frontend technologies."
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectManagement}
              isBlog={false}
              title="Project Management"
              description="A full-stack web application built with React.js (frontend) and Node.js (backend) that helps manage and track projects efficiently. It displays key metrics like total projects, active tasks, and completed tasks, and allows users to add and organize projects with descriptions and deadlines through a clean dashboard interface."
              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
