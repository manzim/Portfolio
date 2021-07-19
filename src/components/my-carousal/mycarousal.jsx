import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Slide1 from '../../assets/img/carousal/cp(4).jpg'
import Slide2 from '../../assets/img/carousal/cp(1).jpg'
import Slide3 from '../../assets/img/carousal/cp(2).jpg'

import './mycarousal.css';
import { ScrollDown } from '../scroll-down-button/scrolldownbutton';

export function MyCarousal() {
    return (
        <>
            <div id="home" className="home">
                <Carousel controls={false} indicators interval={3500}  pause={false}>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 custom-img"
                            src={Slide1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={Slide2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={Slide3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <ScrollDown />
            </div>
        </>
    )
}