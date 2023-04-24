import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE<span className="purple"> ME PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              Je suis tombé amoureux de la programmation et j'ai au moins appris
              quelque chose, je pense... 🤷‍♂️
              <br />
              <br />
              Je parle couramment des classiques comme
              <i>
                <b className="purple"> C++, Java ,Javascript et Python. </b>
              </i>
              <br />
              <br />
              Mes centres d'intérêt sont la création de nouvelles &nbsp;
              <i>
                <b className="purple">
                  technologies et de nouveaux produits Web{" "}
                </b>{" "}
                ainsi que les domaines liés à{" "}
                <b className="purple">
                  l'apprentissage profond et au traitement des langues
                  naturelles.{" "}
                </b>
              </i>
              <br />
              <br />
              Dans la mesure du possible, j'applique également ma passion pour
              le développement de produits avec<b className="purple">
                Node.js
              </b>{" "}
              et
              <i>
                <b className="purple">
                  {" "}
                  les bibliothèques et frameworks Javascript modernes
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js et Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zawa9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/BOURHILZAKARIA2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zakaria-bourhil-931727228/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/z.bourhil/?hl=fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
