import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const destination = [
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/08/лого-новый-век-1024x689-1.png',
        title: 'Eiffel Tower'
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2015/01/belyj-znachek-e1554876852154.png',
        title: 'South America'
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2015/01/belyj-znachek21.png',
        title: 'Australia '
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/image-1.png',
        title: 'India'
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/08/лого-2-1024x772-1.png',
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
                <div className="bg-white content-inner-1">
                    <div className="container">
                        <div className="section-head d-flex text-black">
                            <div className="flex-grow-1">
                                <h2 className="text-uppercase m-b0">Наши проекты</h2>
                                <p className="m-b0">Компания работает на туристическом рынке более 18 лет и за эти годы наработала огромный опыт в организации туров по всем направлениям.
                                    Основным направлением работы компании является внутренний туризм, экологические маршруты и детские программы.
                                    Компания является победителем   Дальневосточного регионального конкурса «Лидеры туриндустрии Приморья» (2005, 2007, 2010, 2012 гг).</p>
                            </div>
                            <div className="align-self-center">
                                <Link to={'/packages'} className="site-button button-md pull-right m-t5">Смотреть все</Link>
                            </div>
                        </div>
                    </div>
                    <div className="section-content">
                        <Slider className="destination slider-background" {...settings}>
                            {destination.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect zoom-slow ">
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