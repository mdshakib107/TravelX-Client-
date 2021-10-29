import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="mb-5 p-3 ">
                <div>
                    <div className="container">
                        <h2 className="fs-3 fw-bold text-uppercase  text-dark"> Blog's </h2>
                        <Slider {...settings}>
                            <div >
                                <img src="./images/blogs/1.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/blogs/2.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/blogs/3.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/blogs/4.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/blogs/5.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/blogs/6.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/blogs/7.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/blogs/8.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/blogs/9.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/blogs/10.png" alt="" />
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
