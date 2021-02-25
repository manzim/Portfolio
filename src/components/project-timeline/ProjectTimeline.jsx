import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import HTML5 from "../../assets/img/skills/html-5.svg";
import CSS3 from "../../assets/img/skills/css3.svg";

import Project1 from "../../assets/img/projects/project1.jpg";

import './ProjectTimeline.css'

export function Projects() {
    return (
        <>
            <div id="projects mb-5">
                <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
                <Timeline>
                    <Events>
                        {/* Project: Todo List With MUI */}
                        <ImageEvent
                            date="01/10/2020"
                            className="text-center"
                            text="React ToDo App"
                            src={CSS3}
                            alt="React ToDo App"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey="0"
                                                className="p-2 text-center accordian-main"
                                            >
                                                PROJECT DETAILS
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0" className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>Keeps track of your Todos</li>
                                                        <li>Powered by React and Material UI</li>
                                                        <li>Respoisive Design</li>
                                                    </ul>
                                                    <hr />
                                                    <strong>Tech used:</strong>
                                                    <ul className="d-flex">
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={HTML5}
                                                                    alt="HTML 5"
                                                                    rounded
                                                                    className="image-style m-1"
                                                                ></Image>{" "}
                                                                HTML5
                                                                </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={HTML5}
                                                                    alt="CSS 3"
                                                                    rounded
                                                                    className="image-style m-1"
                                                                ></Image>{" "}
                                                                CSS3
                                                                </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={HTML5}
                                                                    alt="React"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                React
                                                                </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={HTML5}
                                                                    alt="Material-UI"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                            Material-UI
                                                            </span>
                                                        </li>

                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    <UrlButton
                                        href=""
                                        target="_blank"
                                    >
                                        SEE LIVE
                                    </UrlButton>
                                    <UrlButton
                                        href=""
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                    <UrlButton
                                        href=""
                                        target="_blank"
                                    >
                                        WATCH VIDEO
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                    </Events>

                    {/* Project: Todo List With MUI */}
                    <ImageEvent
                        date="01/10/2020"
                        className="text-center"
                        text="React ToDo App"
                        src={CSS3}
                        alt="React ToDo App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                            </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Keeps track of your Todos</li>
                                                    <li>Powered by React and Material UI</li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul className="d-flex">
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                HTML5
                                                                </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                CSS3
                                                                </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                React
                                                                </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Material-UI
                                                            </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href=""
                                    target="_blank"
                                >
                                    SEE LIVE
                                    </UrlButton>
                                <UrlButton
                                    href=""
                                    target="_blank"
                                >
                                    SOURCE CODE
                                    </UrlButton>
                                <UrlButton
                                    href=""
                                    target="_blank"
                                >
                                    WATCH VIDEO
                                    </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: Todo List With MUI */}
                    <ImageEvent
                        date="01/10/2020"
                        className="text-center"
                        text="React ToDo App"
                        src={Project1}
                        alt="React ToDo App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                            </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Keeps track of your Todos</li>
                                                    <li>Powered by React and Material UI</li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul className="d-flex">
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                HTML5
                                                                </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                CSS3
                                                                </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                React
                                                                </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Material-UI
                                                            </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="#"
                                    target="_blank"
                                >
                                    SEE LIVE
                                    </UrlButton>
                                <UrlButton
                                    href="#"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                    </UrlButton>
                                <UrlButton
                                    href="#"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                                    </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                </Timeline>
            </div>
        </>
    )
}