import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.jpeg";
import faceCovering from "../../Assets/Projects/faceCovering.png";
import spoken from "../../Assets/Projects/spoken.png";
//import suicide from "../../Assets/Projects/suicide.png";
import stockSearch from "../../Assets/Projects/stockSearch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={spoken}
              isBlog={false}
              title="Spoken2Written"
              description="A Python Package to Convert text of spoken styles into its equivalent written form. This package helps to process the text obtained using speech recognition models."
              link="https://github.com/HerambVD/spoken2written"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockSearch}
              isBlog={false}
              title="Stock-Search"
              description="Stock Seach web application that helps user to search latest Stock Price and maintain their portfolio and watchlists. Developed using AngularJS, NodeJS, Bootstrap"
              link="https://stock-search-346103.wl.r.appspot.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceCovering}
              isBlog={false}
              title="Face-Covering-Detector"
              description="Face Covering Detector model that could detect Face Covering of any type (not just masks). Trained RetinaNet to obtain state of the art performance."
              link="https://www.kaggle.com/code/heramb17/using-pretrained-network/notebook"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
