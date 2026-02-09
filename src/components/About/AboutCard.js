import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mark Ian Bernardo</span>{" "}
            from <span className="purple">Olongapo City, Philippines</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Engineer</span>.
            <br />I hold a Bachelor of Science degree in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">Gordon College</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Music Production 🎶
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with family and friends 💖
            </li>
          </ul>

          {/* <p style={{ color: "#ffffff" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
