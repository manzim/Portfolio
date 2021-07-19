import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import tictactoe from "../../assets/img/skills/tictactoe.svg";
import HTML5 from "../../assets/img/skills/html-5.svg";
import CSS3 from "../../assets/img/skills/css3.svg";
import REACT from "../../assets/img/skills/react.svg";
import api from "../../assets/img/skills/api.svg";
import rockpapperscissorgame from "../../assets/img/skills/rockpapperscissorgame.svg";
import weatherapp from "../../assets/img/skills/weatherapp.svg";
import typescript from "../../assets/img/skills/typescript.svg";
import Blueprint from "../../assets/img/skills/blueprint.svg";
import Tachyons from "../../assets/img/skills/Tachyons.svg";
import todolist from "../../assets/img/skills/todolist.svg";

import './ProjectTimeline.css'

export function Projects() {
    return (
        <>
            <div id="projects" className="mb3">
                <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
                <Timeline>
                    <Events>
                        {/* customized rockpapperscissor game */}
                        <ImageEvent
                            date="01/10/2020"
                            className="text-center"
                            text="rock-paper-scissor game"
                            src={rockpapperscissorgame}
                            alt="rock-paper-scissor game"
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
                                                    <strong>Description:</strong>
                                                    This is a rock-paper-scissor game built with React, typescript, HTML, CSS3, blueprinJS
                                                    & tachyons.
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>On landing page player name entry (mandatory)</li>
                                                        <li>Play traditional rock-papper-scissor game 1v1</li>
                                                        <li>Winner declared everytime by pop-up</li>
                                                        <li>Instant score update</li>
                                                    </ul>
                                                    <hr />
                                                    <strong>Tech used:</strong>
                                                    <ul className="d-flex" style={{ listStyle: 'none' }}>
                                                        <li>
                                                            <span className="p-2">
                                                                <img
                                                                    src={typescript}
                                                                    alt="typescript"
                                                                    rounded
                                                                    className="image-style m-1"
                                                                ></img>{" "}
                                                                Typescript
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={REACT}
                                                                    alt="React"
                                                                    rounded
                                                                    className="image-style m-1"
                                                                ></Image>{" "}
                                                                React.js
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={HTML5}
                                                                    alt="HTML5"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                HTML
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={Tachyons}
                                                                    alt="tachyons"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Tachyons
                                                            </span>
                                                        </li>

                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    {/* <UrlButton
                                        href=""
                                        target="_blank"
                                    >
                                        SEE LIVE
                                    </UrlButton> */}
                                    <UrlButton
                                        href="https://github.com/manzim/rockpapperscissorgame"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                    <UrlButton
                                        href="https://drive.google.com/file/d/1QYX4BtUdnbF28oQa3uEhrOOyEV1vukrG/view?usp=sharing"
                                        target="_blank"
                                    >
                                        WATCH VIDEO
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                    </Events>

                    {/* Project: weather app */}
                    <ImageEvent
                        date="01/10/2020"
                        className="text-center"
                        text="Weather App"
                        src={weatherapp}
                        alt="Weather App"
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
                                                <strong>Description:</strong> 
                                                    This is an live weather update based app. You can search any city to get the weather update
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Weather update of any city</li>
                                                    <li>Fast searching</li>
                                                    <li>Background changes with the temperature reading to give you an idea of outside</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul className="d-flex" style={{ listStyle: 'none' }}>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={REACT}
                                                                alt="REACT"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            react.js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="html"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={CSS3}
                                                                alt="CSS3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={api}
                                                                alt=""
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            API
                                                        </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                {/* {/* <UrlButton
                                    href=""
                                    target="_blank"
                                >
                                    SEE LIVE 
                                </UrlButton> */}
                                <UrlButton
                                    href="https://github.com/manzim/weatherapi"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                                <UrlButton
                                    href="https://drive.google.com/file/d/1L_wLxn0fYDkbSkBnBXtIKFTb2YsJOGJn/view?usp=sharing"
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
                        src={todolist}
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
                                                <strong>Description:</strong> 
                                                This is a Todo App created with React and React-hooks that keeps a track of your tasklists
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Keeps track of your tasks</li>
                                                    <li>Add infinite amount of jobs</li>
                                                    <li>Delete any jobs</li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul className="d-flex" style={{ listStyle: 'none' }}>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={REACT}
                                                                alt="react.js"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            REACT
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={REACT}
                                                                alt="react hooks"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            React Hooks
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="html"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            HTML
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={Blueprint}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            BluePrintJS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={Tachyons}
                                                                alt="tachyons"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Tachyons
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                {/* <UrlButton
                                    href="#"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton> */}
                                <UrlButton
                                    href="https://github.com/manzim/todolist"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                                <UrlButton
                                    href="https://drive.google.com/file/d/1hCpBbHbKn9ZVqX-j7hCHfwQImNWWNJ-X/view?usp=sharing"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: Tictactoe game with typescript */}
                    <ImageEvent
                        date="01/10/2020"
                        className="text-center"
                        text= "tic tac toe"
                        src={tictactoe}
                        alt= "tic tac toe"
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
                                                <strong>Description:</strong> 
                                                    Our Childhood game tic-tac-toe. 
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Login window with player name</li>
                                                    <li>Basic tic-tac-toe</li>
                                                    <li>Winner update</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul className="d-flex" style={{ listStyle: 'none' }}>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={REACT}
                                                                alt="REACT"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            react.js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={typescript}
                                                                alt="typescript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Typescript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5}
                                                                alt="html"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={CSS3}
                                                                alt="CSS3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>                                                    

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                {/* {/* <UrlButton
                                    href=""
                                    target="_blank"
                                >
                                    SEE LIVE 
                                </UrlButton> */}
                                <UrlButton
                                    href="https://github.com/manzim/tictactoegame"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                                <UrlButton
                                    href="https://drive.google.com/file/d/1NotUczbN0Mk4g2tqb0ZVOLX53FxwwGad/view?usp=sharing"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: Todo List With MUI */}
                </Timeline>
            </div>
        </>
    )
}