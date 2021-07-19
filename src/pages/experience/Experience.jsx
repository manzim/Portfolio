import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./Experience.css";

import { companyXP } from './Experience.js';

export function Experience() {
    return (
        <div id="experiences" className="exp">
            <h1 className="pt-3 text-center text-underline font-details-b pb-3">EXPERIENCE</h1>
            {companyXP.Doctorkoi.map((details, index) => (
                <Jumbotron className="jumbo-style" key={index}>
                    <Container>
                        <Tilt options={{ max: 25 }}>
                            <Card>
                                <Card.Header  className="d-flex justify-content-center flex-wrap">
                                    <Card.Img
                                        variant="top"
                                        className="img-resize"
                                        src={details.imgSrc}
                                        alt={details.companyName}
                                    />
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                        <Card.Title className="text-center" >{details.jobTitle}</Card.Title>
                                    </div>
                                    <div>
                                        <Card.Text className="text-center style">
                                            <strong className="body-title-style ">{details.jodDesignation}</strong>
                                            <br />
                                            <strong>Technology:</strong> {details.technology}
                                            <br />
                                            <strong>Duration:</strong> {details.duration}
                                            <br />
                                            <strong> # Job Responsibilities #</strong>
                                            <ul className="text-left">
                                                <li><strong>Developed &amp; enhanced</strong> {details.developed1}</li>
                                                <li><strong>Developed</strong> {details.developed2}</li>
                                                <li><strong>Provided</strong> {details.developed3}</li>
                                                <li>{details.developed4}</li>
                                            </ul>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Container>
                </Jumbotron>
            ))
            }
            {companyXP.DecipherTech.map((details, index) => (
                <Jumbotron className="jumbo-style" key={index}>
                    <Container>
                        <Tilt options={{ max: 25 }}>
                            <Card>
                                <Card.Header  className="d-flex justify-content-center flex-wrap">
                                    <Card.Img
                                        variant="top" className="img-resize" src={details.imgSrc}
                                        alt="Renssoft Software Solutions. Ltd"
                                    />
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                        <Card.Title className="text-center">{details.jobTitle}</Card.Title>
                                    </div>
                                    <div>
                                        <Card.Text className="text-center style">
                                            <strong className="body-title-style ">{details.jodDesignation}</strong>
                                            <br />
                                            <strong>Technology:</strong> {details.technology}
                                            <br />
                                            <strong>Duration:</strong> {details.duration}
                                            <br />
                                            <strong> Description </strong>
                                            <ul className="text-left">
                                                <li><strong>Developed &amp; enhanced</strong> {details.developed1}</li>
                                                <li><strong>Learned</strong> {details.developed2}
                                                </li>
                                                <li><strong>Designed</strong>{details.developed3}</li>
                                                <li><strong>Tested</strong> {details.developed4}
                                                </li>
                                                {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                                            </ul>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Container>
                </Jumbotron>
            ))
            }
        </div>
    )
}