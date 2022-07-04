import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import banner from "../logos/banner.png";
import ReCAPTCHA from "react-google-recaptcha";
export default function Banner() {
  // for capcta
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const handleClick = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <>
      <div className="main-banner-div position-relative">
        <img src={banner} className="banner-img" alt="banner-img" />
        <Container className=" overlap-section">
          <Row>
            <Col md={6} className="banner-heading">
              <h3 className="discoverEndless">Discover Endless</h3>
              <h3 className="destiantionEducation">
                Desination For <br></br>Your Education
              </h3>
              <p className="puAbroad">With PU Study Abroad</p>
              <div className="opputity-heading">
                {" "}
                <span className="moreUniversity">80+</span>
                <span className="collab">Collaborations</span>{" "}
                <span className="withParameter">with Pramanent University</span>{" "}
              </div>
              <div className="apply-button-section">
                <Button className="btn btn-primary banner-apply-now">
                  Apply Now
                </Button>{" "}
                <span className="study-abroad">Study Abroad</span>
              </div>
            </Col>

            <Col md={6}>
              <Form className="form-submition" onSubmit={handleClick}>
                <Form.Label className="apply-now-heading">Apply Now</Form.Label>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Select aria-label="Default select example">
                    <option>Select State</option>
                    <option value="1">Bihar</option>
                    <option value="2">Delhi</option>
                    <option value="3">Punjab</option>
                    <option value="4">Uttar Pradesh</option>
                    <option value="5">Mumbai</option>
                  </Form.Select>
                  {/* <Form.Control type="opetion" placeholder="Select State" /> */}
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Select aria-label="Default select example">
                    <option>Select City</option>
                    <option value="1">Pune</option>
                    <option value="2">Patna</option>
                    <option value="3">Rohni</option>
                  </Form.Select>
                  {/* <Form.Control type="text" placeholder="Select City" /> */}
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Select aria-label="Default select example">
                    <option>Work Experience</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                  </Form.Select>
                  {/* <Form.Control type="text" placeholder="Work Experience" /> */}
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCaptha">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
