import React from 'react';

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './ContactForm.css';

export function ContactForm() {
    return (
        <>
            <div id="contact">
                <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
                <Jumbotron className="contact-jumbotron">
                    <Row>
                        <Col className="d-flex justify-content-center flex-wrap">
                            <div className="m-2">
                                <a href="mailto:manzim.ruet@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-danger" title="manzim.ruet@gmail.com">
                                        <i className="fas fa-envelope-square"></i> Email Me
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://www.linkedin.com/in/ahmed-manzim-ridwan/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="LinkenIn Profile">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                                    </Button>
                                </a>
                            </div>

                            <div className="m-2">
                                <a href="https://github.com/manzim" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-dark" title="Github Repositories">
                                        <i className="fab fa-github-square"></i> GitHub
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://www.youtube.com/user/" target="_blank" rel="noopener noreferrer">
                                    <Button id="youtube-btn" variant="outline-info" title="Learn Weekly">
                                        <i class="fab fa-youtube"></i> Youtube
                                    </Button>
                                </a>
                            </div>
                            {/* <div className="m-2">
                                <a href="https://twitter.com/akjha96" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-info" title="Tweets are welcomed!">
                                        <i className="fab fa-twitter"></i> Twitter
                                    </Button>
                                </a>
                            </div> */}
                            <div className="m-2">
                                <a href="https://www.facebook.com/manzim.soumik" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Poke me">
                                        <i className="fab fa-facebook-square"></i> FaceBook
                                    </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        </>
    )
}