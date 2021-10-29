import React from 'react';
import { Carousel } from 'react-bootstrap';

const banar = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/banar/1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/banar/2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/banar/3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default banar;