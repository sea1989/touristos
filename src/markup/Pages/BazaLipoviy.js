import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

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

class BazaLipoviy extends Component {

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
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Урочище БОЛЬШОЙ ЛИПОВЫЙ</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Главная</Link></li>
                                    <li>Базы</li>
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
                                            <h2>Урочище БОЛЬШОЙ ЛИПОВЫЙ</h2>
                                            <p><i className="fa fa-map-marker m-r5"></i>Партизанск <Link className="text-primary">View on Map</Link></p>
                                            <p><span className="site-button button-sm button-gray">База</span> <span className="site-button button-sm">Отдых</span> Тур</p>
                                        </div>
                                        <div className="tour-price ml-auto">
                                            <span>Номер/1 ночь</span>
                                            <h2 className="price">Руб 5,990</h2>
                                            <h4 className="actual-price">Руб 7,990</h4>
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
                                        <h2 className="m-b10">ОПИСАНИЕ БАЗЫ</h2>
                                        <p>Центр расположен в лесной зоне, в 13 км от центра города Партизанска и в 5-ти км. от п.Наречное, в 2 км от станции Красноармейское.
                                            Располагается Центр в уникальном природном комплексе, в глубоком таежном распадке, в предгорьях Сихотэ-Алиня (хребет Партизанский и хребет Пидан).
                                            С неповторимым микроклиматом, со своим температурным режимом, влажностью, розой ветров и воздуха, прозрачного,
                                            пронизанного особыми ароматами леса и прохладой горных ключей, несущего запахи и силу тайги, это все и создает уникальный оздоровительный эффект данного места.
                                            Территория обустроена, разбиты цветники, куртины из цветущих кустарников, альпийская горка с лекарственными,
                                            красно- книжными растениями и эндемиками Приморского края (микробиота вечнозеленая, брусника, можжевельник с берегов Кемы, бадан, очиток едкий, разнообразие папоротников),
                                            газоны на территории подстрижены и предназначены для игр, отдыха и сна. На них так хорошо спится. Дорожки выложены брусчаткой и отсыпаны отсевом, в ночное время территория и беседки освещены.
                                            Центр — это большой дом в 2 этажа, в 9 жилых комнат (4 больших комнаты на 1-ом этаже, 5  поменьше комнат на втором этаже, 2-е из них с балконами),
                                            VIP зальчика для посиделок, бильярдной, зоны отдыха с библиотекой и холла с камином, большим телевизором (спутниковое телевидение, DVD) и обеденной зоной.
                                            Окна в доме пластиковые, полы покрыты ковровым покрытием.  Дом теплый, в зимнее время отапливается каином, батареями и инфракрасными обогревателями. В доме ходят в тапочках.
                                            Комнаты оборудованы 2-х спальными кроватями, плетеной мебелью, зеркалом, вешалкой и телевизором.
                                            Есть комната №2 на 3- человека. В комнатах установлены индивидуальные регуляторы температуры, выставить комфортный для себя температурный режим может каждый.
                                            Несколько комнат возможно оборудовать дополнительными местами для детей (раскладушками).
                                            Большие теплые одеяла,  хорошее постельное белье  и полотенца для умывания. В доме оборудованы туалетные комнаты, душ с горячей водой работает от бойлера. На втором этаже собрана библиотека на вкус любого читателя.
                                        </p>
                                        <div className="row">

                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <h5>Для активного отдыха предлагаем к услугам гостей :</h5>
                                                <ul className="list-hand-point primary">
                                                    <li>русская парная с купелью</li>
                                                    <li>каток</li>
                                                    <li>веревочный парк «ПОПОЛЗЕНЬ»</li>
                                                    <li>таежную горку для санок</li>
                                                    <li>лыжню по таежному распадку протяженностью 7 км, 1,5 км</li>
                                                    <li>лыжня для маленьких, от 3х лет (специальные лыжи) и горка на территории</li>
                                                    <li>клюшки, лыжи, коньки и санки</li>
                                                    <li>тир (пневматика, лук)</li>
                                                    <li>мячи, бадминтон</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <h5>Стоимость проживания в Центре на 2020 — 2021 год.</h5>
                                                <ul className="list-hand-point primary">
                                                    <li>Полный пансион	- от 3000</li>
                                                    <li>2-х местный номер (без питания). Доп услуги оплачиваются отдельно - от 4000</li>
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
export default BazaLipoviy;