import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const destination = [
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/image-2.png',
        title: 'Eiffel Tower'
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/image-3.png',
        title: 'South America'
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/image-4.png',
        title: 'Australia '
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/03/Frame-71.png',
        title: 'India'
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/image-5.png',
        title: 'Philippines '
    },
]


class Slick extends Component {

    render() {
        var settings = {
            dots: false,
            slidesToShow: 5,
            infinite: true,
            autoplay: false,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };
        return (
            <div>
                <div className="slider-background">
                    <div className="container">
                        <div className="section-head d-flex text-white">
                            <div className="flex-grow-1">
                                <h2 className="text-uppercase m-b0">Наши проекты</h2>
                            </div>
                        </div>
                    </div>
                    <div className="section-content">
                        <Slider className="destination" {...settings}>
                            {destination.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect zoom-slow slider-project-list ">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

        )
    }
}
export default Slick;