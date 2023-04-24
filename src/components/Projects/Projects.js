import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes derniers <strong className="purple"> Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FCode"
              description=" Conception et développement d'un mini compilateur pour un langage de programmation similaire à l'algorithme en Java"
              ghLink="https://github.com/Ayoubbooob/FCODE-vf"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FIN NMCHIW "
              description="Conception et développement d'une application mobile pour
              fournir aux utilisateurs des informations sur des lieux répartis
              en trois catégories : points d'intérêt, lieux de service et lieux de
              loisirs."
              ghLink="https://github.com/Ayoubbooob/FCODE-vf"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Boutique en ligne"
              description="Conception et développement d'un site web de commerce électronique qui permet aux clients de naviguer et d'acheter des
              produits en ligne. Le site web dispose d'une interface utilisateur intuitive, d'un système de panier d'achat robuste et d'une
              passerelle de paiement sécurisée.
              "
              ghLink="https://github.com/Ayoubbooob/FCODE-vf"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Projet de fin de première année"
              description=" Conception et Réalisation d'une application mobile de suivi des
              patients obèses destinée aux médecins de service d'endocrinologie
              diabétologie du CHU Ibn Sina."
              ghLink="https://github.com/Ayoubbooob/FCODE-vf"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Projet de gestion d'un établissement"
              description=" Conception et développement d'une application de bureau pour
              la gestion des structures de recherche au sein d'une institution
              de recherche. L'application fournit une interface conviviale pour
              gérer différents aspects des structures de recherche, y compris le
              personnel et les projets de recherche.."
              ghLink="https://github.com/Ayoubbooob/MedCare"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Projet Cloud"
              description="Mise en place des modeles PaaS , SaaS et Iaas sur AWS et sur
              Google cloud plateforme."
              ghLink="https://github.com/Ayoubbooob/FCODE-vf"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
