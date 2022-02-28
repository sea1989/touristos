import React, { useState, useEffect } from 'react'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';
import { TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
    url: 'https://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/', // Your store URL
    consumerKey: 'ck_ec13b20905009b1ea7018f1696f5f0d45738b4a4', // Your consumer key
    consumerSecret: 'cs_524a79c134001e1c82f209675cf4d1303c8d3899', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

var bg3 = 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/baza_lipoviy.jpg';

const BazaLipoviyVer2 = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const [dataPlaces, setDataPlaces] = useState([]);

    const [lipovoy, setLipovoy] = useState([]);


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        fetch('https://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/pages/3988')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setLipovoy({
                    title: data.acf.desc,
                    content: data.content.rendered,
                    images: [...data.content.rendered.matchAll(/src="(.*?)"/g)].map(
                        ([, link]) => link
                    ),
                });
            });
    }, []);

    useEffect(() => {
        WooCommerce.get("products",

            {
                per_page: 6,
                category: 19,
            }
        )
            .then((response) => {

                setDataPlaces(response.data);
                console.log(dataPlaces)
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Урочище БОЛЬШОЙ ЛИПОВЫЙ</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link to={''}>Главная</Link></li>
                                <li>Урочище БОЛЬШОЙ ЛИПОВЫЙ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listing-details-head">
                <div className="container">
                    <div className="listing-info-box">
                        <div className="listing-theme-logo">
                            <img src='http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/image-3.png' alt="" />
                        </div>
                        <div className="listing-info">
                            <div className="listing-info-left">
                                <h3 className="title">БОЛЬШОЙ ЛИПОВЫЙ</h3>
                                <p>Центр расположен в лесной зоне, в 13 км от центра города Партизанска и в 5-ти км. от п.Наречное, в 2 км от станции Красноармейское.
                                    Располагается Центр в уникальном природном комплексе, в глубоком таежном распадке, в предгорьях Сихотэ-Алиня (хребет Партизанский и хребет Пидан).
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="listing-details-nav">
                <div className="container">
                    <ul className="listing-nav nav justify-content-center">
                        <li>
                            <Link className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}><i className="la la-home"></i><span>Основное</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}><i className="la la-file-text"></i><span>Описание</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}><i className="la la-list-alt"></i><span>Услуги</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={classnames({ active: activeTab === '4' })}
                                onClick={() => { toggle('4'); }}><i className="la la-image"></i><span>Фото</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={classnames({ active: activeTab === '6' })}
                                onClick={() => { toggle('6'); }}><i className="la la-calendar-check-o"></i><span>События</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-full listing-details-content">
                <div className="container">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7 col-md-12">

                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title"><i className="la la-file-text m-r5"></i> описание</h3>
                                        </div>
                                        <div className="content-body">

                                            <p dangerouslySetInnerHTML={{ __html: lipovoy.content }} />

                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title"><i className="la la-list-alt m-r5"></i>услуги</h3>
                                        </div>
                                        <div className="content-body">
                                            <ul className="icon-box-list list-col-4">
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-life-buoy"></i>
                                                    </div>
                                                    <span>Expert</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-cutlery"></i>
                                                    </div>
                                                    <span>Restaurant</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-shopping-cart"></i>
                                                    </div>
                                                    <span>Shopping</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-line-chart"></i>
                                                    </div>
                                                    <span>State Street</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-lemon-o"></i>
                                                    </div>
                                                    <span>Tea Tasting</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-wifi"></i>
                                                    </div>
                                                    <span>Wifi</span>
                                                </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title"><i className="la la-file-image-o"></i> Фото</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="widget widget_gallery gallery-grid-4 lightgallery">
                                                <ul>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <Link to={''}>
                                                                <div className="dlab-post-thum"><img src='http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/09/44092.1403671886.jpg' alt="" /></div>
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <Link to={''}>
                                                                <div className="dlab-post-thum"><img src='http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/09/44092.1403671886.jpg' alt="" /></div>
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <Link to={''}>
                                                                <div className="dlab-post-thum"><img src='http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/09/44092.1403671886.jpg' alt="" /></div>
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <Link to={''}>
                                                                <div className="dlab-post-thum"><img src='http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/09/44092.1403671886.jpg' alt="" /></div>
                                                                <div className="more-images">
                                                                    <div>
                                                                        <strong>6</strong>
                                                                        <span>Images</span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content-footer content-btn">
                                            <Link to={''} className="site-button">See All</Link>
                                        </div>
                                    </div>

                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title"><i className="la la-calendar-check-o m-r5"></i>events</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="listing-bx event-listing m-b10">
                                                        <div className="listing-media">
                                                            <Link to={''}>
                                                                <img src={require('./../../images/featured/pic3.jpg')} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="listing-info">
                                                            <h3 className="title"><Link to={''}>Moments To Remember From Directory</Link></h3>
                                                            <ul className="event-meta">
                                                                <li className="event-date"><span>SEP</span> <strong>04</strong></li>
                                                                <li>Tuesday 08:00</li>
                                                                <li>Sydney NSW, Australia</li>
                                                                <li>44 people interested</li>
                                                            </ul>
                                                        </div>
                                                        <div className="event-bottom">
                                                            <ul>
                                                                <li className="event-hosted"><span>Hosted By </span> <Link to={''}>John Smith</Link></li>
                                                                <li><Link to={''}><i className="la la-star-o"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="listing-bx event-listing m-b10">
                                                        <div className="listing-media">
                                                            <Link to={''}>
                                                                <img src={require('./../../images/featured/pic2.jpg')} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="listing-info">
                                                            <h3 className="title"><Link to={''}>Moments To Remember From Directory</Link></h3>
                                                            <ul className="event-meta">
                                                                <li className="event-date"><span>SEP</span> <strong>04</strong></li>
                                                                <li>Tuesday 08:00</li>
                                                                <li>Sydney NSW, Australia</li>
                                                                <li>44 people interested</li>
                                                            </ul>
                                                        </div>
                                                        <div className="event-bottom">
                                                            <ul>
                                                                <li className="event-hosted"><span>Hosted By </span> <Link to={''}>John Smith</Link></li>
                                                                <li><Link to={''}><i className="la la-star-o"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-footer content-btn">
                                            <Link to={''} className="site-button">See All</Link>
                                        </div>
                                    </div>

                                    <iframe title="This is a unique title" src="https://yandex.ru/map-widget/v1/?um=constructor%3Adebb49e651a6cc6ff194d513dcbdb3b6787745f0de4aecb30e0524c6c95cc0b0&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>

                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 m-b15">
                                            <h3 className="m-b5">Варианты :</h3>
                                            <div className="dlab-separator bg-primary"></div>
                                        </div>

                                        {dataPlaces.map((item, index) => (
                                            <div className="col-md-12 col-lg-6 col-sm-12 m-b30" key={index}>
                                                <div className="dlab-box place-bx top-item">
                                                    <div className="dlab-media top-item__media"> <Link><img src={item.images[0]?.src || 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2018/11/DSC_2797-scaled.jpg'} alt="" /></Link> </div>
                                                    <div className="dlab-info p-tb30 p-lr10 text-center bg-gray">
                                                        <h4 className="dlab-title m-t0"><Link>{item.name}</Link></h4>
                                                        <p className="m-b10">{item.name}</p>
                                                        <Link to={'./booking/' + item.id} className="site-button outline radius-xl m-lr5">Подробнее</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                <div className="col-xl-4 col-lg-5 col-md-12 sticky-top">
                                    <aside className="side-bar listing-side-bar">
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title"><i className="la la-bullhorn m-r5"></i>Best Seller</h3>
                                            </div>
                                            <div className="content-body">
                                                <div className="tour-booking-form">
                                                    <div className="tour-booking-head">

                                                        <span>Выбрать</span>
                                                    </div>
                                                    <form className="row sp15">
                                                        <div className="form-group col-md-6">
                                                            <input type="text" className="form-control" placeholder="Имя" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <input type="text" className="form-control" placeholder="Фамилия" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <input type="email" className="form-control" placeholder="Email" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <input type="text" className="form-control" placeholder="Кол-во гостей" />
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <input type="text" className="form-control" placeholder="Телефон" />
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <textarea className="form-control" placeholder="Текст"></textarea>
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <button className="site-button btn-block text-uppercase button-md">Забронировать</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title"><i className="la la-map-signs m-r5"></i>business info</h3>
                                            </div>
                                            <div className="content-body">
                                                <ul className="icon-box-list">
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-envelope"></i>
                                                        </div>
                                                        <span>info@example.com</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-phone"></i>
                                                        </div>
                                                        <span>+91 1 234 5648</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-globe"></i>
                                                        </div>
                                                        <span>https://triper.dexignlab.com/</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-map-marker"></i>
                                                        </div>
                                                        <span>Demo Address #8901 Marmora Road</span>
                                                    </Link></li>
                                                </ul>
                                                <ul className="list-inline m-tb20">
                                                    <li><Link to={''} className="site-button sharp"><i className="fa fa-facebook"></i></Link></li>
                                                    <li><Link to={''} className="site-button sharp"><i className="fa fa-google-plus"></i></Link></li>
                                                    <li><Link to={''} className="site-button sharp"><i className="fa fa-linkedin"></i></Link></li>
                                                    <li><Link to={''} className="site-button sharp"><i className="fa fa-instagram"></i></Link></li>
                                                    <li><Link to={''} className="site-button sharp"><i className="fa fa-twitter"></i></Link></li>
                                                </ul>
                                                <Link to={''} className="site-button  btn-block gray"><i className="fa fa-envelope"></i> Inbox</Link>
                                            </div>
                                        </div>

                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title"><i className="la la-tags m-r5"></i>tags</h3>
                                            </div>
                                            <div className="content-body">
                                                <ul className="icon-box-list list-col-2">
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-life-buoy"></i>
                                                        </div>
                                                        <span>Expert</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-cutlery"></i>
                                                        </div>
                                                        <span>Restaurant</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-shopping-cart"></i>
                                                        </div>
                                                        <span>Shopping</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-line-chart"></i>
                                                        </div>
                                                        <span>State Street</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-lemon-o"></i>
                                                        </div>
                                                        <span>Tea Tasting</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-wifi"></i>
                                                        </div>
                                                        <span>Wifi</span>
                                                    </Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </aside>
                                </div>

                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">description</h3>
                                        </div>
                                        <div className="content-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">listing features</h3>
                                        </div>
                                        <div className="content-body">
                                            <ul className="icon-box-list list-col-4">
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-life-buoy"></i>
                                                    </div>
                                                    <span>Expert</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-cutlery"></i>
                                                    </div>
                                                    <span>Restaurant</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-shopping-cart"></i>
                                                    </div>
                                                    <span>Shopping</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-line-chart"></i>
                                                    </div>
                                                    <span>State Street</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-lemon-o"></i>
                                                    </div>
                                                    <span>Tea Tasting</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-wifi"></i>
                                                    </div>
                                                    <span>Wifi</span>
                                                </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="4">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">photos</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="widget widget_gallery gallery-grid-4 lightgallery">
                                                <ul>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <img src={require('./../../images/gallery/img1.jpg')} alt="" />
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <img src={require('./../../images/gallery/img2.jpg')} alt="" />
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <img src={require('./../../images/gallery/img3.jpg')} alt="" />
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <img src={require('./../../images/gallery/img4.jpg')} alt="" />
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="5">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">videos</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="widget widget_video video-grid-4">
                                                <ul>
                                                    <li>
                                                        <div className="dlab-post-thum video-bx">
                                                            <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                                            <div className="video-play-icon">
                                                                <Link to={''} className="popup-youtube video"><i className="la la-play"></i></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">events</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="listing-bx event-listing m-b30">
                                                        <div className="listing-media">
                                                            <Link to={''}>
                                                                <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="listing-info">
                                                            <h3 className="title"><Link to={''}>Moments To Remember From Directory</Link></h3>
                                                            <ul className="event-meta">
                                                                <li className="event-date"><span className="text-primary">SEP</span> <strong>04</strong></li>
                                                                <li>Tuesday 08:00</li>
                                                                <li>Sydney NSW, Australia</li>
                                                                <li>44 people interested</li>
                                                            </ul>
                                                        </div>
                                                        <div className="event-bottom">
                                                            <ul>
                                                                <li className="event-hosted"><span>Hosted By </span> <Link to={''}>John Smith</Link></li>
                                                                <li><Link to={''}><i className="la la-star-o"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="7">
                            <div className="row">
                                <div className="col-xl-8">

                                    <div className="comments-review-area">
                                        <div className="comments-review-box">
                                            <div className="review-header">
                                                <div className="review-comment-author">
                                                    <div className="review-avatar">
                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                    </div>
                                                    <div className="comment-info">
                                                        <div className="info-group">
                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                        </div>
                                                        <span className="comment-date">July 25, 2019</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix d-flex">
                                                    <div className="average-reviews-single">
                                                        <div className="average-reviews-info">
                                                            <h4 className="average-reviews">7.7</h4>
                                                            <div className="clearfix">
                                                                <h4 className="average-reviews-in">/ 10</h4>
                                                                <span>Quality</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                        <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="la la-ellipsis-h"></i>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                <p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                <ul className="review-meta">
                                                    <li>4 Liked</li>
                                                    <li>4 Shared</li>
                                                </ul>
                                            </div>
                                            <div className="review-footer">
                                                <div className="review-btn">
                                                    <ul>
                                                        <li><Link to={''}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                                        <li><Link to={''}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                                        <li>
                                                            <div className="dropdown dropdown-btn">
                                                                <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="la la-share-square-o m-r5"></i>  Share
                                                                </button>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <Link className="dropdown-item site-button-link facebook" to={''}>
                                                                        <i className="fa fa-facebook"></i><span>Facebook</span></Link>
                                                                    <Link className="dropdown-item site-button-link twitter" to={''}>
                                                                        <i className="fa fa-twitter"></i><span> Twitter</span></Link>
                                                                    <Link className="dropdown-item site-button-link pinterest" to={''}>
                                                                        <i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
                                                                    <Link className="dropdown-item site-button-link linkedin" to={''}>
                                                                        <i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-list">
                                                    <ul>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-form">
                                                    <div className="review-avatar">
                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                    </div>
                                                    <div className="form-area">
                                                        <textarea className="form-control" placeholder="Type To Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comments-review-box">
                                            <div className="review-header">
                                                <div className="review-comment-author">
                                                    <div className="review-avatar">
                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                    </div>
                                                    <div className="comment-info">
                                                        <div className="info-group">
                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                        </div>
                                                        <span className="comment-date">July 25, 2019</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix d-flex">
                                                    <div className="average-reviews-single">
                                                        <div className="average-reviews-info">
                                                            <h4 className="average-reviews">7.7</h4>
                                                            <div className="clearfix">
                                                                <h4 className="average-reviews-in">/ 10</h4>
                                                                <span>Quality</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                        <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-h"></i>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                <p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                <ul className="review-meta">
                                                    <li>4 Liked</li>
                                                    <li>4 Shared</li>
                                                </ul>
                                            </div>
                                            <div className="review-footer">
                                                <div className="review-btn">
                                                    <ul>
                                                        <li><Link to={''}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                                        <li><Link to={''}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                                        <li>
                                                            <div className="dropdown dropdown-btn">
                                                                <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="la la-share-square-o m-r5"></i>  Share
                                                                </button>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <Link className="dropdown-item site-button-link facebook" to={''}>
                                                                        <i className="fa fa-facebook"></i><span>Facebook</span></Link>
                                                                    <Link className="dropdown-item site-button-link twitter" to={''}>
                                                                        <i className="fa fa-twitter"></i><span> Twitter</span></Link>
                                                                    <Link className="dropdown-item site-button-link pinterest" to={''}>
                                                                        <i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
                                                                    <Link className="dropdown-item site-button-link linkedin" to={''}>
                                                                        <i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-list">
                                                    <ul>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-form">
                                                    <div className="review-avatar">
                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                    </div>
                                                    <div className="form-area">
                                                        <textarea className="form-control" placeholder="Type To Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comments-review-box">
                                            <div className="review-header">
                                                <div className="review-comment-author">
                                                    <div className="review-avatar">
                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                    </div>
                                                    <div className="comment-info">
                                                        <div className="info-group">
                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                        </div>
                                                        <span className="comment-date">July 25, 2019</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix d-flex">
                                                    <div className="average-reviews-single">
                                                        <div className="average-reviews-info">
                                                            <h4 className="average-reviews">7.7</h4>
                                                            <div className="clearfix">
                                                                <h4 className="average-reviews-in">/ 10</h4>
                                                                <span>Quality</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                        <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-v"></i>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                            <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                <p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                <ul className="review-meta">
                                                    <li>4 Liked</li>
                                                    <li>4 Shared</li>
                                                </ul>
                                            </div>
                                            <div className="review-footer">
                                                <div className="review-btn">
                                                    <ul>
                                                        <li><Link to={''}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                                        <li><Link to={''}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                                        <li>
                                                            <div className="dropdown dropdown-btn">
                                                                <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="la la-share-square-o m-r5"></i>  Share
                                                                </button>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <Link className="dropdown-item site-button-link facebook" to={''}>
                                                                        <i className="fa fa-facebook"></i><span>Facebook</span></Link>
                                                                    <Link className="dropdown-item site-button-link twitter" to={''}>
                                                                        <i className="fa fa-twitter"></i><span> Twitter</span></Link>
                                                                    <Link className="dropdown-item site-button-link pinterest" to={''}>
                                                                        <i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
                                                                    <Link className="dropdown-item site-button-link linkedin" to={''}>
                                                                        <i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-list">
                                                    <ul>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-form">
                                                    <div className="review-avatar">
                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                    </div>
                                                    <div className="form-area">
                                                        <textarea className="form-control" placeholder="Type To Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">24 REVIEWS FOR triper</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="average-reviews-list bar-rating">
                                                <ul>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Quality</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">8.5</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Location</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">7.5</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Space</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">7.4</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Service</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">7.9</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Price</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">7.4</h4>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default BazaLipoviyVer2;