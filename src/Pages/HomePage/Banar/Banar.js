import React from 'react';
import { Carousel } from 'react-bootstrap';

const banar = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/banar/banar.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/banar/2.png"
                        alt="Second slide"
                    />
                </Carousel.Item>


            </Carousel>
        </div>
    );
};

export default banar;