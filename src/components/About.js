import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import aboutUniversityImg from "../logos/parulUniversity.png";
export default function About() {
  return (
    <>
    
    <div className="main-div-about">
         
      <Container className="about-container-div">
        <Row className="about-row-div">
          <Col md={5}>
            <h3 className="aboutHeading">About Parul University’s Study Abroad</h3>
            <p className="aboutPara">
              The Parul University Study Abroad Center provides students with
              leading opportunities to pursue their studies abroad under the
              guidance of leading experts. The University’s ties with strategic
              Universities worldwide across Europe, Australia, USA, Canada,
              amongst others. We provide the best assistance in language
              coaching, admissions, and visa processing which allows you to
              reach your academic dreams.
            </p>
          </Col>

          <Col md={5}>
            <img className="parulUniImg" src={aboutUniversityImg} alt="aboutimg" />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}
