import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je m'appelle{" "}
            <span className="purple">Zakaria Bourhil </span>
            de <span className="purple"> Rabat, MAROC.</span>
            <br />
            je suis un élève Ingénieur en 2A à l'ENSIAS en Génie Logiciel
            <br />
            <br />
            En dehors du codage, j'aime beaucoup d'autres activités !{" "}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Natation
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyage
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "S'efforcer de construire des choses qui font la différence !!"{" "}
          </p>
          <footer className="blockquote-footer">Zakaria</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
