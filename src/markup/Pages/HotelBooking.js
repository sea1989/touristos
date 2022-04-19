import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

const hotelSlider = [
    {
        image: require('./../../images/hotel/pic1.jpg'),
    },
    {
        image: require('./../../images/hotel/pic2.jpg'),
    },
    {
        image: require('./../../images/hotel/pic3.jpg'),
    },
    {
        image: require('./../../images/hotel/pic4.jpg'),
    },
    {
        image: require('./../../images/hotel/pic5.jpg'),
    },
    {
        image: require('./../../images/hotel/pic6.jpg'),
    },
    {
        image: require('./../../images/hotel/pic7.jpg'),
    },
    {
        image: require('./../../images/hotel/pic8.jpg'),
    },
    {
        image: require('./../../images/hotel/pic9.jpg'),
    },
    {
        image: require('./../../images/hotel/pic10.jpg'),
    },
]
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

class HotelBooking extends Component {

    render() {
        var settings = {
            dots: true,
            slidesToShow: 1,
            infinite: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div>
                <Header />
                <div className="dlab-bnr-inr overlay-black-light" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Hotel Booking</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Home</Link></li>
                                    <li>Hotel Booking</li>
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
                                            <h2>FabHotel RMS Comforts</h2>
                                            <p><i className="fa fa-map-marker m-r5"></i>Yeshwanthpur, Bangalore <Link className="text-primary">View on Map</Link></p>
                                            <p><span className="site-button button-sm button-gray">Hotel</span> <span className="site-button button-sm">Bar</span> Tour</p>
                                        </div>
                                        <div className="tour-price ml-auto">
                                            <span>Per Room Per Night</span>
                                            <h2 className="price">Rs.1,07,990</h2>
                                            <h4 className="actual-price">Rs.1,23,990</h4>
                                        </div>
                                    </div>
                                    <div className="product-gallery on-show-slider">
                                        <Slider className="blog-carousel nav-btn-center-lr btn-1" {...settings} >
                                            {hotelSlider.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="dlab-box">
                                                        <div className="dlab-thum-bx">
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>

                                    </div>
                                    <div className="tour-days">
                                        <h2 className="m-b10">About Hotel</h2>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <ul className="list-hand-point primary">
                                                    <li>Closeness to ISRO (1.6 km) and BEL (2.4 km)</li>
                                                    <li>Cozy rooms with modern interiors</li>
                                                    <li>In-house restaurant serving tasty dishes</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <h5>Where we are Located</h5>
                                                <ul className="list-hand-point primary">
                                                    <li>The FabHotel RMS Comforts is situated on 5th Main in the Mathikere Extension area</li>
                                                    <li>Yeshwantpur Junction Railway Station is 1.8 km, while Krantivira Sangolli Rayanna Railway Station is 7.3 km from the hotel</li>
                                                    <li>Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)</li>
                                                    <li>Some of the prominent landmarks near the hotel include BBMP Office (700 m), Ramaiah Institute of Technology (750 m), Indian Institute of Science (950 m), BEL-THALES Systems Limited (1.5 km), ISRO (1.6 km), RTO Office Yeshwanthpura (1.8 km), Antrix Corporation Limited (1.9 km), Bharat Electronics Limited (2.1 km) and Professional Tax Office (2.5 km)</li>
                                                    <li>Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <h5>Where to Eat</h5>
                                                <ul className="list-hand-point primary">
                                                    <li>The hotel has a restaurant that treats you with a wide range of dishes across multiple cuisines</li>
                                                    <li>Sri Krishna Bhavan (53 m), Shree Sagar (63 m), Delight (72 m), Reddy Mess (140 m), Star Biryani Center (290 m) and Indira Canteen (300 m) are among many dining options around the hotel</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sticky-top">
                                        <form className="hotel-booking">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzName" required="" className="form-control" placeholder="" type="date" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzName" required="" className="form-control" placeholder="" type="date" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="quantity btn-quantity">
                                                            <input className="form-control" id="demo_vertical2" type="text" name="demo_vertical2" />
                                                        </div>
                                                        <span className="font-12">Rooms</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="quantity btn-quantity">
                                                            <input className="form-control" id="demo_vertical2" type="text" name="demo_vertical2" />
                                                        </div>
                                                        <span className="font-12">Adults</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="quantity btn-quantity">
                                                            <input className="form-control" id="demo_vertical2" type="text" name="demo_vertical2" />
                                                        </div>
                                                        <span className="font-12">Children</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-12 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <select className="form-control">
                                                                <option>Deluxe Twin Bed Room</option>
                                                                <option>Breakfast and Dinner</option>
                                                                <option>Deluxe Twin (Smoking)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                    <div className="booking-total">
                                                        <h3 className="d-flex">Rs.40000 <span>Sub Total1 room for 1 night</span></h3>

                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                    <Link ><button type="submit" className="site-button btn-block">Book Now</button></Link>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="m-t30">
                                            <img src={require('./../../images/add/add-bnr.jpg')} className="d-md-none d-xl-block d-lg-block" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-b30">
                                <div className="col-md-12 col-lg-12">
                                    <div className="day-details-bx">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-4">
                                                <h4 className="m-b5">Arrival in London </h4>
                                                <div className="m-b10">
                                                    <ul className="rating-star">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-check primary">
                                                            <li>Fits 2</li>
                                                            <li>Study table</li>
                                                            <li>Bathroom</li>
                                                            <li>Fits 2</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-check primary">
                                                            <li>Bathroom</li>
                                                            <li>Study table</li>
                                                            <li>LCD TV</li>
                                                            <li>Study table</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <ul className="tour-tag">
                                                    <li><Link>Breakfast</Link></li>
                                                    <li><Link>Dinner</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-7 col-lg-4">
                                                <div className="info-bx ">
                                                    <p>The hotel has a restaurant that treats you with a wide range of dishes across multiple cuisines</p>
                                                    <div className="tour-price">
                                                        <span>Per Room Per Night</span>
                                                        <h2 className="price">Rs.1,07,990</h2>
                                                        <h4 className="actual-price">Rs.1,23,990</h4>
                                                    </div>
                                                    <div className="m-t20 m-b30">
                                                        <Link className="site-button red">Remove</Link>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-5 col-lg-4">
                                                <img src={require('./../../images/our-work/pic1.jpg')} className="radius-sm" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                <input id="demo_vertical2" type="text"  name="demo_vertical2" />
                                                <span className="font-12">Adult (12yrs +)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text"  name="demo_vertical2" />
                                                <span className="font-12">Child (2-12yrs)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text"  name="demo_vertical2" />
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
                                                <input id="demo_vertical2" type="text"  name="demo_vertical2" />
                                                <span className="font-12">Adult (12yrs +)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text"  name="demo_vertical2" />
                                                <span className="font-12">Child (2-12yrs)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text"  name="demo_vertical2" />
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
}
export default HotelBooking;