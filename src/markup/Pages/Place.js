import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
var bg1 = require('./../../images/background/bg1.jpg');
var bg3 = require('./../../images/banner/bnr1.jpg');


class Place extends Component {

    constructor(props) {
        super(props);
        this.state = { dataPlaces: [], pages: [], currentPage: 1 };

        this.changePage = this.changePage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);

        if (event.target.value === 'Морские') {
            WooCommerce.get("products",
                {
                    per_page: 12,
                    category: 20,
                    page: this.state.currentPage,
                },
            )
                .then((response) => {
                    this.setState({
                        dataPlaces: response.data,
                        pages: response.headers['x-wp-totalpages']
                    });
                    console.log(this.state.dataPlaces)
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        }

        else if (event.target.value === 'Обзорные') {
            WooCommerce.get("products",
                {
                    per_page: 12,
                    category: 19,
                    page: this.state.currentPage,
                },
            )
                .then((response) => {
                    this.setState({
                        dataPlaces: response.data,
                        pages: response.headers['x-wp-totalpages']
                    });
                    console.log(this.state.dataPlaces)
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        }

    }

    handleChangeType(event) {
        console.log(event.target.value);

        if (event.target.value === 'Пеший') {
            WooCommerce.get("products",
                {
                    per_page: 12,
                    category: 23,
                    page: this.state.currentPage,
                },
            )
                .then((response) => {
                    this.setState({
                        dataPlaces: response.data,
                        pages: response.headers['x-wp-totalpages']
                    });
                    console.log(this.state.dataPlaces)
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        }


    }

    componentDidMount() {
        WooCommerce.get("products",
            {
                per_page: 12,
                //category: 20,
                page: this.state.currentPage,
            },
        )
            .then((response) => {
                this.setState({
                    dataPlaces: response.data,
                    pages: response.headers['x-wp-totalpages']
                });
                console.log(this.state.dataPlaces)
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    changePage(page) {

        this.setState({
            currentPage: page
        });

        WooCommerce.get("products",

            {
                per_page: 12,
                //category: 20,
                page: page,
            },

        )
            .then((response) => {
                this.setState({
                    dataPlaces: response.data,
                    pages: response.headers['x-wp-totalpages']
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
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Услуги</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li>Туры и Экскурсии</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-full book-form overlay-black-dark bg-img-fix p-t30 p-b10 mid" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                    <div className="container">
                        <form className="row">

                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Категории</label>
                                <select className="form-control" onChange={this.handleChange}>
                                    <option>Любая</option>
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
                                <select className="form-control" onChange={this.handleChangeType}>
                                    <option>Любой</option>
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
                                    <option>Любое</option>
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
                                    <option>Любая</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4 отдыха</option>
                                    <option>5 и более</option>
                                </select>

                            </div>

                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>География тура</label>
                                <select className="form-control">
                                    <option>Любая</option>
                                    <option>Большой липовый</option>
                                    <option>Мама-Саха</option>
                                    <option>Хасанский район</option>
                                    <option>Заповедник</option>
                                    <option>остальное Приморье</option>
                                    <option>Алтай</option>
                                    <option>Байкал</option>
                                    <option>Москва</option>
                                    <option>Россия</option>
                                </select>
                            </div>

                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Find</label>
                                <Link to={'/place'} className="site-button btn-block">Поиск</Link>
                            </div>
                        </form>
                    </div>
                </div>



                <div className="section-full bg-white content-inner dlab-about-1">
                    <div className="container">
                        <div className="row">

                            <div className="">
                                <div className="m-b10">
                                    <form>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search for..." />
                                                <span className="input-group-btn p-l15">
                                                    <button className="site-button" type="button">Поиск</button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 m-b15">
                                        <h3 className="m-b5">Places in :</h3>
                                        <div className="dlab-separator bg-primary"></div>
                                    </div>

                                    {this.state.dataPlaces.map((item, index) => (
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

                                <div className="pagination-bx clearfix text-center">
                                    <ul className="pagination">
                                        <li className="previous"><Link><i className="ti-arrow-left"></i> Prev</Link></li>

                                        {Array.apply(null, Array(+this.state.pages))?.map((item, i) => {
                                            return <li onClick={() => { this.changePage(i + 1) }}><Link>{i + 1}</Link></li>;
                                        })}

                                        {/* <li className="active"><Link>1</Link></li> */}

                                        <li className="next"><Link>Next <i className="ti-arrow-right"></i></Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Place;