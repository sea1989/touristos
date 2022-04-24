import React, { useState, useEffect } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import Slick from './Slick';

import Slick2 from './Slick2';

import TopPlaces from './../Element/TopPlaces';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import { useDispatch, useSelector } from 'react-redux';

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
    url: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/', // Your store URL
    consumerKey: 'ck_ec13b20905009b1ea7018f1696f5f0d45738b4a4', // Your consumer key
    consumerSecret: 'cs_524a79c134001e1c82f209675cf4d1303c8d3899', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

var bg1 = 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/03/bg_partners.jpg';

function Homepage() {

    const dispatch = useDispatch()
    const categoryStore = useSelector(state => state.categoryArray)

    const [dataPlaces, setDataPlaces] = useState([]);
    const [packages, setPackages] = useState([]);
    const [content, setСontent] = useState([]);
    const [categoryArray, setCategoryArray] = useState(categoryStore);

    function handleChange(event) {
        console.log(event.target.value);

        const allForms = document.querySelectorAll('select.form-control');
        console.log([...allForms].map((item) => item.value));

        setCategoryArray(
            [...allForms].map((item) => item.value).reduce((acc, item) => item === 0 ? acc : [...acc, item], []),
        );
    }

    function handleChangeType() {
        dispatch({ type: 'ADD_CATEGORIES', payload: categoryArray })
    }


    useEffect(() => {
        fetch('http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/slider')
            .then((response) => response.json())
            .then((data) => {
                setСontent(data.map((item) => ({
                    id: item.id,
                    title: item.title.rendered,
                    button: item.acf.button_name,
                    image: item.acf.foto,
                    link_button: item.acf.link_button,

                })));
            });
    }, []);

    useEffect(() => {
        WooCommerce.get("products",

            {
                per_page: 6,
                featured: true,
            }
        )
            .then((response) => {
                setDataPlaces(response.data)
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    useEffect(() => {
        WooCommerce.get("products",

            {
                per_page: 4,
                category: 83,
            }
        )
            .then((response) => {
                setPackages(response.data)
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);





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
                                <a href={item.link_button} ><button className="site-button">{item.button}</button></a>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="section-full book-form overlay-black-dark bg-img-fix p-t30 p-b10 mid" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                    <div className="container">
                        <form className="row" onChange={handleChange}>

                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Категории</label>
                                <select className="form-control">
                                    <option value='0'>Любая</option>
                                    <option value='0'>Обзорные</option>
                                    <option value='20'>Морские</option>
                                    <option value='0'>Познавательные</option>
                                    <option value='23'>Пешеходные</option>
                                    <option value='0'>Активные</option>
                                    <option value='24'>Промышленные</option>
                                    <option value='0'>Природные объекты</option>
                                    <option value='21'>Город крепость</option>
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Вид тура</label>
                                <select className="form-control" >
                                    <option value='0'>Любой</option>
                                    <option value='23'>Пеший</option>
                                    <option value='16'>Экскурсия</option>
                                    <option value='60'>Тур</option>
                                    <option value='0'>Катерный</option>
                                    <option value='63'>Автобусный</option>
                                    <option value='0'>Катер + автобус</option>
                                    <option value='0'>Семейный</option>
                                    <option value='61'>Детский</option>
                                    <option value='0'>Активный</option>
                                    <option value='0'>Обзорный</option>
                                    <option value='0'>Индивидуальный</option>
                                    <option value='0'>Групповой</option>
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Направления</label>
                                <select className="form-control">
                                    <option value='0'>Любое</option>
                                    <option value='0'>Горы</option>
                                    <option value='0'>Острова</option>
                                    <option value='54'>Заповедники</option>
                                    <option value='0'>Базы отдыха</option>
                                    <option value='0'>Лечение</option>
                                    <option value='0'>Море</option>
                                    <option value='0'>Водопады</option>
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Продолжительность</label>

                                <select className="form-control">
                                    <option value='0'>Любая</option>
                                    <option value='0'>1</option>
                                    <option value='49'>2</option>
                                    <option value='50'>3</option>
                                    <option value='51'>4 отдыха</option>
                                    <option value='0'>5 и более</option>
                                </select>

                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>География тура</label>
                                <select className="form-control">
                                    <option value='0'>Любая</option>
                                    <option value='0'>Большой липовый</option>
                                    <option value='0'>Мама-Саха</option>
                                    <option value='0'>Хасанский район</option>
                                    <option value='0'>Заповедник</option>
                                    <option value='0'>остальное Приморье</option>
                                    <option value='0'>Алтай</option>
                                    <option value='0'>Байкал</option>
                                    <option value='0'>Москва</option>
                                    <option value='0'>Россия</option>
                                </select>
                            </div>

                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group button__search" onClick={handleChangeType}>
                                <Link to={'/place'} className="site-button btn-block">Поиск</Link>
                            </div>
                        </form>
                    </div>
                </div>

                <TopPlaces places={dataPlaces} />

                <div className="section-full bg-white content-inner dlab-about-1 promotions">
                    <div className="container">
                        <div className="section-head text-black text-center">
                            <h2 className="text-uppercase m-b0">Туры</h2>
                            <p className="font-18">Лучшие туры </p>
                        </div>
                        <div className="row packages">

                            {packages.map((item, index) => (
                                <div className="col-md-6 col-xl-3  col-sm-6 m-b20" key={index}>
                                    <div className="dlab-box">
                                        <div className="dlab-media">
                                            <Link to={'./booking/' + item.id}><img src={item.images[0].src} alt="" /> </Link>
                                        </div>
                                        <div className="dlab-info p-a15 border-1">
                                            <h4 className="dlab-title m-t0"><a href="booking-details.html">{item.name}</a></h4>
                                            <div className="package-content">
                                                <div className="clearfix">
                                                    <span className="package-price pull-left text-primary">Руб {item.price}</span>
                                                    <Link to={'./booking/' + item.id} className="site-button pull-right">Подробнее</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

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
export default Homepage;