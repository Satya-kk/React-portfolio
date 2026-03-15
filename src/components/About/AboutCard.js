import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Satyam Kadam</span>, <span className="purple">a Computer Engineering undergraduate </span>and  <span className="purple">MERN Stack Developer</span> from Pune, India.
            <br /><br/>
            I enjoy turning <span className="purple">Ideas</span> into scalable <span className="purple">Full-Stack</span> solutions, backed by strong <span className="purple">problem-solving skills</span> and a solid foundation in <span className="purple">DSA</span>.
            <br /> 
            <br />I’m currently pursuing my <span className="purple">Bachelor of Engineering</span> in <span className="purple">Computer Engineering</span> at <span className="purple">Dr.D.Y. Patil College of Engineering and Innovation</span>.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that create real impact!"{" "}
          </p>
          <footer className="blockquote-footer">Satyam Kadam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
