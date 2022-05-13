import React, { useState, useEffect } from 'react'
import Slider from "react-slick";

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
    const [bg1, setBg1] = useState('');
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('https://xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/posts?categories=84')
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

    useEffect(() => {
        fetch('https://xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4401')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBg1(data.acf.bg);
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
            <div className="section-full bg-white content-inner-1" style={{ backgroundImage: "url(" + bg1 + ")", backgroundSize: 'cover' }}>
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
                                                    <img src={item.image} width="150" height="150" alt="" />
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