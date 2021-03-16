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
                Hi there! I am <strong>&nbsp;Ahmed Manzim Ridwan</strong><br/><br/>
                  I'm from Dhaka, Bangladesh. I've completed my B.Sc degree in <strong>Computer Science & Engineeringfrom Rajshahi University of Engineering & Technolody.</strong> Before my graduation was completed I got an opportunity to join 'Rajshahi Cadet College' as a "Part Time ICT Teacher" which lasted for nearly one year. Later I joined DecipherTech as a <strong>Jr. Front End Web Developer</strong>
                  Currently I'm enrolled for <strong>MBA program at Bangladesh University of Professionals</strong>
                  <br/> But due to the global pandemic I'd to switch my job. Then I joined Renssoft Solutions Ltd, conventionally known as <strong>Doctorkoi.com as a Front End Web Developer</strong>
                  <br/> From my early elementary school life <strong>Football is part of my life.</strong>  I'm a huge Football Fan. Since 2013 I've got a new hobby to keep myself busy in Fantasy Premier League. Already I've found myself inside top 10 among all the participants from Bangladesh. I really love to enjoy to this addiction! 
                  <br/> Apart from these I do coding for at least one hour a day.
                  <br/> I've been planning to make a website of mine that'll serve both casual & formal part together. Keep a tab on this site. Many Exciting things will be coming in an interval of every Two Weeks!
                <Col className="d-flex justify-content-around flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Hire Me
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1iLRQiGyOpHif_7CegapoBqurma8Fcj6-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://www.linkedin.com/in/ahmed-manzim-ridwan/" target="_blank" rel="noopener noreferrer">
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

