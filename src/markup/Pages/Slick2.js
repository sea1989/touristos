import React, { useState, useEffect } from 'react'
import Slider from "react-slick";

var bg1 = 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/03/bg_partners.jpg';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="la la-angle-right nav-right" onClick={onClick} />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="la la-angle-left nav-left" onClick={onClick} />
    );
}

function Slick2() {

    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/posts?categories=84')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPartners(data.map((item) => ({
                    id: item.id,
                    title: item.title.rendered,
                    content: item.content.rendered,
                    image: item.acf.ava,

                })));
            });
    }, []);

    var settings = {
        dots: false,
        slidesToShow: 3,
        infinite: true,
        autoplay: false,
        speed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // className: "center",
        // centerMode: true,
        // centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div>
            <div className="section-full bg-white content-inner-1 testimonial-one-area overlay-black-dark" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                <div className="container">
                    <div className="section-head style1 text-center text-white">
                        <h2 className="box-title">Наши партнеры</h2>
                        <div className="dlab-separator bg-primary"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider className="testimonial-center nav-btn-center-lr white" {...settings}>
                                {partners.map((item, index) => (
                                    <div className="item">
                                        <div className="testimonial-1 style-2" style={{ backgroundImage: "url(" + item.bg + ")" }}>
                                            <div className="testimonial-detail clearfix">
                                                <div className="testimonial-pic radius">
                                                    <img src={item.image} width="100" height="100" alt="" />
                                                </div>
                                                <strong className="testimonial-name text-primary">{item.title}</strong>
                                                <span dangerouslySetInnerHTML={{ __html: item.content }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Slick2;