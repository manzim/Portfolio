import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Profile from "../../assets/img/profile/profile.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export function AboutMe() {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3 " style={{color: "whitesmoke"}}>ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Ahmed Manzim Ridwan</strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius rutrum imperdiet. Pellentesque imperdiet nulla id euismod dignissim. Nam placerat congue ultricies. Nulla odio augue, rhoncus sed augue luctus, suscipit lobortis lorem. Maecenas quis erat urna. Nunc dignissim ligula id metus gravida maximus. Proin urna dui, ultrices sit amet imperdiet quis, aliquam in tortor. Cras magna turpis, fermentum quis lacus in, tempus molestie nibh. Quisque libero quam, tincidunt nec interdum id, rutrum sed metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam venenatis ligula sed magna accumsan, eu varius quam blandit. Maecenas id finibus libero. Integer tincidunt odio sem, suscipit pharetra eros lacinia vel. Praesent in vestibulum libero. Maecenas pretium vehicula iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Hire Me
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/manzim" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ahmed-manzim-ridwan-97165014b/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

