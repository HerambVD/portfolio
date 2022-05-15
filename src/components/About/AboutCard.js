import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Heramb Devbhankar </span>
            <br />I am a Computer Science Graduate student at the University of Southern California
            <br />
            <br />
            Besides from coding, here are some of my favorite pastimes!!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming is Bread Butter of my life!"{" "}
          </p>
          <footer className="blockquote-footer">Heramb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
