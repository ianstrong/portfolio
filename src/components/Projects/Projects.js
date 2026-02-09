import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aho from "../../Assets/Projects/aho.png";
import happymove from "../../Assets/Projects/happymove.png";
import joyride from "../../Assets/Projects/joyride.png";
import moment from "../../Assets/Projects/moment.png";
import savegex from "../../Assets/Projects/savegex.png";
import worlds from "../../Assets/Projects/worlds.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aho}
              isBlog={false}
              title="SUNLIFE- Advisor Home Office"
              description="Support feature implementation, collaborate with the UI/UX team on design and display across web and mobile, develop front-end solutions
within a microfrontend architecture, ensure compatibility across platforms, assist with team coding questions, and contribute to deployments.
"
              demoLink="https://advisorhomeoffice.sunlife.com.ph/aho/index.html#/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worlds}
              isBlog={false}
              title="Worlds"
              description="Development of a web platform, handling UI updates, bug resolution, shared components, authentication, analytics integration, age gating
measures, and other tasks, ultimately promoting the platform's stability and success during the beta release. Project closed on 2024."
              demoLink="https://www.instagram.com/reels/CkHEhewAnL2/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moment}
              isBlog={false}
              title="Moment.co"
              description="Developing and stabilizing Moment.co's web platform, which included updating APIs, addressing bug fixes, enhancing real-time chat
communication, improving streaming capabilities, optimizing UI for bundles and merchandise, and ensuring overall application stability,
empowering content creators to monetize their digital content and events successfully"
              demoLink="https://www.moment.co/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={joyride}
              isBlog={false}
              title="Joyride Driver App"
              description="Enhancing the Joyride Driver App by contributing to bug fixes, implementing new features, addressing challenges with an outdated tech stack,
collaborating with a senior colleague, and advocating for the development of a new driver app using the latest React Native version.
"
              demoLink="https://play.google.com/store/apps/details?id=com.joyride.driverv3&hl=en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={happymove}
              isBlog={false}
              title="HappyMove"
              description="Led the development of an online delivery platform, complementing the customer app and enhancing accessibility while improving operational
efficiency."
              demoLink="https://online.joyride.com.ph/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={savegex}
              isBlog={false}
              title="SavageXFenty"
              description="Focusing on UI updates and addressing bug fixes to enhance the user experience and ensure a seamless browsing and purchasing process."
              demoLink="https://www.savagex.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
