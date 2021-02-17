import React from 'react'
import CardDeck from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Skill } from './SkillsData.js'

import './Skills.css'
import Card from 'react-bootstrap/Card';

export function Skills() {
    return (
        <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font=details-b pb-4">Technical Skills</h1>
            <CardDeck >
                <Row className="d-flex justify-content-around">
                    {/* front end part */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">
                                    Frontend
                                </Card.Title>
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skill.frontEnd.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                            
                                                    {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">
                                    BackEnd
                                </Card.Title>
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skill.backend.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                            
                                                    {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">
                                    Hosting Platform
                                </Card.Title>
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skill.hostingPlatforms.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                            
                                                    {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">
                                    Version Control 
                                </Card.Title>
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skill.versionControl.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                            
                                                    {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>                    
                    </Col>
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">
                                    Programming Language
                                </Card.Title>
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skill.programmingLanguages.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                            
                                                    {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">
                                    Database
                                </Card.Title>
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skill.databases.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                            
                                                    {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">
                                    Dev Tools
                                </Card.Title>
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skill.devTools.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                            
                                                    {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {console.log("skill dekhi", Skill)}
                </Row>
            </CardDeck>
        </div>
    )
}