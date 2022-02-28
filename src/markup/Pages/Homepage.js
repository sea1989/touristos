import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import Slick from './Slick';

import Slick2 from './Slick2';

import TopPlaces from './../Element/TopPlaces';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
    url: 'https://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/', // Your store URL
    consumerKey: 'ck_ec13b20905009b1ea7018f1696f5f0d45738b4a4', // Your consumer key
    consumerSecret: 'cs_524a79c134001e1c82f209675cf4d1303c8d3899', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

const content = [
    {
        title: 'Родной край достоин Вашей любви и внимания!',
        button: 'Календарь событий',
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/Чандолаз2.jpg',
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        button: 'Discover',
        image: require('./../../images/main-slider/slide2.jpg'),
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        button: 'Discover',
        image: require('./../../images/main-slider/slide3.jpg'),
    }
];

var bg1 = require('./../../images/background/bg1.jpg');

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = { dataPlaces: [] };
    }

    componentDidMount() {
        WooCommerce.get("products",

            {
                per_page: 6,
                featured: true,
            }
        )
            .then((response) => {
                this.setState({
                    dataPlaces:
                        response.data
                });
                console.log(this.state.dataPlaces)
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    render() {

        return (
            <div>
                <Header />
                <div className="page-content">

                    <Slider className="slider-wrapper" infinite >
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className="slider-content"
                                style={{ background: `url('${item.image}') no-repeat center center` }}
                            >
                                <div className="inner">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <button className="site-button">{item.button}</button>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className="section-full book-form overlay-black-dark bg-img-fix p-t30 p-b10 mid" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                        <div className="container">
                            <form className="row">
                                <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                    <label>Ключевые слова</label>
                                    <input className="form-control" placeholder="Поиск" type="text" />
                                </div>
                                <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                    <label>Категории</label>
                                    <select className="form-control">
                                        <option>Обзорные</option>
                                        <option>Морские</option>
                                        <option>Познавательные</option>
                                        <option>Пешеходные</option>
                                        <option>Активные</option>
                                        <option>Промышленные</option>
                                        <option>Природные объекты</option>
                                        <option>Город крепость</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                    <label>Вид тура</label>
                                    <select className="form-control">
                                        <option>Пеший</option>
                                        <option>Экскурсия</option>
                                        <option>Тур</option>
                                        <option>Катерный</option>
                                        <option>Автобусный</option>
                                        <option>Катер + автобус</option>
                                        <option>Семейный</option>
                                        <option>Детский</option>
                                        <option>Активный</option>
                                        <option>Обзорный</option>
                                        <option>Индивидуальный</option>
                                        <option>Групповой</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                    <label>Направления</label>
                                    <select className="form-control">
                                        <option>Горы</option>
                                        <option>Острова</option>
                                        <option>Заповедники</option>
                                        <option>Базы отдыха</option>
                                        <option>Лечение</option>
                                        <option>Море</option>
                                        <option>Водопады</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                    <label>Продолжительность</label>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4 отдыха</option>
                                        <option>5 и более</option>
                                    </select>
                                </div>

                                <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                    <label>Find</label>
                                    <Link to={'/place'} className="site-button btn-block">Поиск</Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <TopPlaces places={this.state.dataPlaces} />

                    <div className="section-full bg-white content-inner dlab-about-1 promotions">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="text-uppercase m-b0">Пакетные туры</h2>
                                <p className="font-18">Лучшие пакетные туры </p>
                            </div>
                            <div className="row packages">
                                <div className="col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30">
                                    <div className="dlab-box">
                                        <div className="dlab-media">
                                            <Link><img src={require('./../../images/gallery/img4.jpg')} alt="" /></Link>
                                        </div>
                                        <div className="dlab-info p-a15 border-1">
                                            <h4 className="dlab-title m-t0"><Link href="packages.html">Выходные на природе</Link></h4>
                                            <span className="location">Peelamedu, Cbe, Australia</span>
                                            <div className="package-content">
                                                <ul className="package-meta">
                                                    <li><span className="fa fa-calendar"></span> No of Days: 2 </li>
                                                    <li> <span className="fa fa-user"></span> People: 1 </li>
                                                </ul>
                                                <div className="clearfix">
                                                    <span className="package-price pull-left text-primary">$323</span>
                                                    <Link href="booking-details.html" className="site-button pull-right">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30">
                                    <div className="dlab-box">
                                        <div className="dlab-media">
                                            <Link><img src={require('./../../images/gallery/img3.jpg')} alt="" /></Link>
                                        </div>
                                        <div className="dlab-info p-a15 border-1">
                                            <h4 className="dlab-title m-t0"><Link href="packages.html">Выходные в Индии)</Link></h4>
                                            <span className="location">Peelamedu, Cbe, India</span>
                                            <div className="package-content">
                                                <ul className="package-meta">
                                                    <li><span className="fa fa-calendar"></span> No of Days: 2 </li>
                                                    <li> <span className="fa fa-user"></span> People: 1 </li>
                                                </ul>
                                                <div className="clearfix">
                                                    <span className="package-price pull-left text-primary">$323</span>
                                                    <Link href="booking-details.html" className="site-button pull-right">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30">
                                    <div className="dlab-box">
                                        <div className="dlab-media">
                                            <Link><img src={require('./../../images/gallery/img5.jpg')} alt="" /></Link>
                                        </div>
                                        <div className="dlab-info p-a15 border-1">
                                            <h4 className="dlab-title m-t0"><Link href="packages.html">Выходные в Америке)</Link></h4>
                                            <span className="location">Peelamedu, Cbe, South America</span>
                                            <div className="package-content">
                                                <ul className="package-meta">
                                                    <li><span className="fa fa-calendar"></span> No of Days: 2 </li>
                                                    <li> <span className="fa fa-user"></span> People: 1 </li>
                                                </ul>
                                                <div className="clearfix">
                                                    <span className="package-price pull-left text-primary">$323</span>
                                                    <Link href="booking-details.html" className="site-button pull-right">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30">
                                    <div className="dlab-box">
                                        <div className="dlab-media">
                                            <Link><img src={require('./../../images/gallery/img6.jpg')} alt="" /></Link>
                                        </div>
                                        <div className="dlab-info p-a15 border-1">
                                            <h4 className="dlab-title m-t0"><Link href="packages.html">Выходные в Филиппинах)</Link></h4>
                                            <span className="location">Peelamedu, Cbe, Philippines</span>
                                            <div className="package-content">
                                                <ul className="package-meta">
                                                    <li><span className="fa fa-calendar"></span> No of Days: 2 </li>
                                                    <li> <span className="fa fa-user"></span> People: 1 </li>
                                                </ul>
                                                <div className="clearfix">
                                                    <span className="package-price pull-left text-primary">$323</span>
                                                    <Link href="booking-details.html" className="site-button pull-right">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slick />
                    <Slick2 />

                </div>
                <Footer />
            </div>
        )
    }
}
export default Homepage;