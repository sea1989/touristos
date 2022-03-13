import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
    url: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/', // Your store URL
    consumerKey: 'ck_ec13b20905009b1ea7018f1696f5f0d45738b4a4', // Your consumer key
    consumerSecret: 'cs_524a79c134001e1c82f209675cf4d1303c8d3899', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});


var bg3 = require('./../../images/banner/bnr1.jpg');

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
    const { id } = useParams();
    const [tour, setTour] = useState([]);
    const [tourImg, setTourImg] = useState([]);
    const [baner, setBaner] = useState([]);

    useEffect(() => {
        WooCommerce.get(`products/${id}`,

        )
            .then((response) => {
                setTour(response.data);
                setTourImg(response.data.images);
                setBaner(response.data.attributes.filter((item) => item.name === 'baner')[0]?.options[0]);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, [id])

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
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Тур №{id}</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Главная</Link></li>
                                <li>Тур №{id}</li>
                            </ul>
                        </div>
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
                                        <h2>{tour.name}</h2>
                                        <p>Описание тура</p>
                                        <p><span className="site-button button-sm">6 Дней</span> <span className="site-button button-sm">6 Ночей</span> Тур</p>
                                    </div>
                                    <div className="tour-price ml-auto">
                                        <span>Цена</span>
                                        <h2 className="price">{tour.price} Руб</h2>
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

                                    <form className="hotel-booking">
                                        <div className="row">
                                            <div className="col-md-6 col-xl-6 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="" type="date" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-xl-6 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="" type="date" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="ФИО" type="text" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="+7 977 777 77 77" type="tel" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="info@mail.ru" type="mail" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xl-4 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="quantity btn-quantity">
                                                        <input className="form-control" id="demo_vertical2" type="number" placeholder='1' name="demo_vertical2" />
                                                    </div>
                                                    <span className="font-12">Rooms</span>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="Комментарий (при желании)" type="textarea" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <Link ><button type="submit" className="site-button btn-block">Забронировать</button></Link>
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
                                        <div className="day-details bg-primary">Расписание</div>
                                    </div>
                                </div>
                                <div className="col-md-9 col-lg-10">
                                    <div className="day-details-bx">
                                        <div className="row">
                                            <div className="col-md-12 ">
                                                <p dangerouslySetInnerHTML={{ __html: tour.short_description }} />
                                                <ul className="tour-tag">
                                                    <li><Link>Breakfast</Link></li>
                                                    <li><Link>Dinner</Link></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    {/* <div className="modal fade submit-query" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Check Price & Availability</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Customer City</label>
                                                <div className="input-group">
                                                    <select className="form-control">
                                                        <option>Select City</option>
                                                        <option>Kochi</option>
                                                        <option>Mumbai</option>
                                                        <option>New Delhi</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Customer State</label>
                                                <div className="input-group">
                                                    <select className="form-control">
                                                        <option>Select State</option>
                                                        <option>Kochi</option>
                                                        <option>Mumbai</option>
                                                        <option>New Delhi</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Departure Date Selected</label>
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" type="date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Adult (12yrs +)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Child (2-12yrs)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Infant (0-2yrs)</span>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                    <button type="submit" className="site-button-secondry" data-dismiss="modal">Close</button>
                                    <button type="submit" className="site-button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade submit-query" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Get the Best Holiday Planned by Experts!</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h5 className="text-center">Enter your contact details and we will plan the best holiday suiting all your requirements.</h5>
                                    <form className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Name" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" placeholder="Mobile No" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" placeholder="Your City" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" type="date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Adult (12yrs +)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Child (2-12yrs)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Infant (0-2yrs)</span>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                    <button type="submit" className="site-button-secondry" data-dismiss="modal">Close</button>
                                    <button type="submit" className="site-button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default BookingDetails;