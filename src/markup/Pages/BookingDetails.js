import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
    url: 'https://xn--b1amiugdde.xn--p1ai/', // Your store URL
    consumerKey: 'ck_ec13b20905009b1ea7018f1696f5f0d45738b4a4', // Your consumer key
    consumerSecret: 'cs_524a79c134001e1c82f209675cf4d1303c8d3899', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

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

const BookingDetails = () => {
    const [bg3, setBg3] = useState('');
    const { id } = useParams();
    const [tour, setTour] = useState([]);
    const [tourImg, setTourImg] = useState([]);
    const [baner, setBaner] = useState([]);

    const [days, setDays] = useState([]);
    const [nights, setNights] = useState([]);
    const [linkForPay, setLinkForPay] = useState([]);
    const [qr, setQR] = useState([]);



    function formHandler() {
        fetch('https://xn--b1amiugdde.xn--p1ai/wp-json/contact-form-7/v1/contact-forms/4220/feedback',
            { method: 'POST', body: new FormData(document.querySelector('#formElem')) })
    }

    useEffect(() => {



        WooCommerce.get(`products/${id}`,
        )
            .then((response) => {
                setTour(response.data);
                setTourImg(response.data.images);
                setBaner(response.data.attributes.filter((item) => item.name === 'baner')[0]?.options[0]);
                setDays(response.data.meta_data.find(({ key }) => key == 'days').value)
                setNights(response.data.meta_data.find(({ key }) => key == 'nights').value)
                setLinkForPay(response.data.meta_data.find(({ key }) => key == 'link_for_pay').value)
                setQR(response.data.meta_data.find(({ key }) => key == 'qr').value)
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, [id])

    useEffect(() => {
        fetch('https://xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4272')
            .then((response) => response.json())
            .then((data) => {
                setBg3(data.acf.bg);
            });
    }, []);

    var settings = {
        dots: true,
        slidesToShow: 1,
        infinite: true,
        centerPadding: 30,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            <Header />
            <div className="dlab-bnr-inr overlay-black-light" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">{tour.name}</h1>
                    </div>
                </div>
            </div>
            <div className="content-block">
                <div className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="row m-b30">
                            <div className="col-lg-8">
                                <div className="d-flex info-bx m-b30">
                                    <div className="tour-title">

                                        <p>Описание тура</p>
                                        <p><span className="site-button button-sm">{days} Дней</span> <span className="site-button button-sm">{nights} Ночей</span> Тур</p>
                                    </div>
                                    <div className="tour-price ml-auto">
                                        <span>Цена</span>
                                        <h2 className="price">{tour.price || 'не указана  '} Руб</h2>
                                        <h4 className="actual-price">{tour.regular_price} Руб</h4>
                                    </div>
                                </div>
                                <div className="product-gallery on-show-slider">
                                    <Slider className="blog-carousel nav-btn-center-lr btn-1" {...settings} >
                                        {
                                            tourImg.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="dlab-box">
                                                        <div className="dlab-thum-bx">
                                                            <img src={item.src} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </Slider>
                                </div>
                                <div className="tour-days">
                                    <h2 className="m-b10">О маршруте</h2>
                                    <p dangerouslySetInnerHTML={{ __html: tour.description }} />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sticky-top">

                                    <form className='hotel-booking qr'>
                                        <img src={qr} alt='qr' />
                                        <a target="_blank" rel="noopener noreferrer" href={linkForPay} ><button
                                            className="site-button btn-block"
                                        >Купить</button></a>
                                    </form>

                                    <hr />
                                    <h2>или</h2>
                                    <hr />
                                    <form id="formElem" className="hotel-booking">
                                        <input type='hidden' name='tourName' value={tour.name}></input>
                                        <div className="row">
                                            <div className="col-md-6 col-xl-6 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input
                                                            name="dateStart"
                                                            required=""
                                                            className="form-control"
                                                            placeholder=""
                                                            type="date"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-xl-6 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input
                                                            name="dateFinish"
                                                            required=""
                                                            className="form-control"
                                                            placeholder=""
                                                            type="date"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input
                                                            name="fio"
                                                            required=""
                                                            className="form-control"
                                                            placeholder="ФИО"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input
                                                            name="tel"
                                                            required=""
                                                            className="form-control"
                                                            placeholder="+7 977 777 77 77"
                                                            type="tel"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input
                                                            name="email"
                                                            required=""
                                                            className="form-control"
                                                            placeholder="info@mail.ru"
                                                            type="mail"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xl-4 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="quantity btn-quantity">
                                                        <input
                                                            className="form-control"
                                                            id="demo_vertical2"
                                                            type="number"
                                                            placeholder='1'
                                                            name="rooms"
                                                        />
                                                    </div>
                                                    <span className="font-12">Комнат</span>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input
                                                            name="comments"
                                                            required=""
                                                            className="form-control"
                                                            placeholder="Комментарий (при желании)"
                                                            type="textarea"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <Link ><button
                                                    type="submit"
                                                    className="site-button btn-block"
                                                    onClick={formHandler}
                                                >Забронировать</button></Link>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="m-t50">
                                        <img src={baner ? baner : ''} className="d-md-none d-xl-block d-lg-block" alt="" />
                                    </div>
                                </div>


                            </div>
                        </div>

                        {
                            <div className="row m-b30" >
                                <div className="col-md-3 col-lg-2">
                                    <div className="sticky-top">
                                        <div className="day-details bg-primary">Программа</div>
                                    </div>
                                </div>
                                <div className="col-md-9 col-lg-10">
                                    <div className="day-details-bx">
                                        <div className="row">
                                            <div className="col-md-12 ">
                                                <p dangerouslySetInnerHTML={{ __html: tour.short_description }} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </div>
            <Footer />
        </div >
    )
}

export default BookingDetails;