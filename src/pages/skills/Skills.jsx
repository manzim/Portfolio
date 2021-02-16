import React from 'react'
import CardDeck from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Skill } from './SkillsData.js'

import './Skills.css'

export function Skills() {
    return(
        <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font=details-b pb-4">Technical Skills</h1>
            <CardDeck >
                <Row className="d-flex justify-content-around">
                    {/* front end part */}
                    {console.log("skill dekhi", Skill)}
                </Row>
            </CardDeck>
        </div>
    )
}