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
            <Col xs={12} md={4}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={8}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Ahmed Manzim Ridwan</strong> <br /> <br />
                I've completed my SSC & HSC both from Pabna Cadet College in 2010 & 2012 respectively. 
                Later I persued my B.Sc degree in Computer Sciece & Engineering from Rajshahi University of Engineering & Technology. 
                Before being a CSE graduate I got offer from Rajshahi Cadet College to serve as an ICT Teacher (part time contract of 1 year).
                Then I got an internship opportunity eventually which I could make permanent successfully at DecipherTech as Junior Web Developer. I got hand in experiences in SDLC, Web development by WordPress, Product image editing, Manual testing, Documentation, off page SEO etc.  
                I would still be a team member of DecipherTech had not Covid-19 hit them. In March'20 I joined Renssoft Soln Ltd as a Front-end Developer. 
                My previous web development experience helped me here to contribute in responsive web development projects. Not only web development but also I'd been a part of software front end feature development.
                Here I have got the opportunities to work with React.js framework, JavaScript, HTML, CSS3, TypeScript, basic of GraphQL-indexedDB, Tachyons, BlueprintJS, Material-UI, react-bootstrap. 
                
                <br /> <br /> <br />
                As part of web development, I also worked with basic SEO setup, meta tags, google analytics, bing webmaster tools, google tag manager etc. 
                Also before submitting my task I myself used to run down the basic lifecycle to ensure the feature development is as per the mock-up. Thus I've also learnt about documentation as an added value
                <br /> In my leisure I love to surf the youtube to learn more about new techs, podcast, QA sessions of interview or skill I'm upto. I've recently started to utilize my leisure time into freelancing. 
                <br /><br /> Football is my passion for lifetime. Hence apart from playing as a FWD, I also spend significant amount of time in Fantasy Premier League (thus came inside top10 in bangladesh twice in last 6years!)
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2 b" variant="outline-info">
                        Hire Me
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1_QuGfZPIPWu9uiUcTBjDSrWR5wMh_ysH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2 b" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/manzim" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2 b" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ahmed-manzim-ridwan" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2 b" variant="outline-primary">
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

