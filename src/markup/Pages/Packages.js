import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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

//var bg3 = require('./../../images/banner/bnr1.jpg');

const Packages = () => {

    const [packages, setPackages] = useState([]);

    const [pages, setPages] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [searchValue, setSearchValue] = useState('');

    const [bg3, setBg3] = useState('');

    useEffect(() => {
        WooCommerce.get("products",

            {
                per_page: 12,
                category: 83,
            }
        )
            .then((response) => {

                setPackages(response.data);
                setPages(response.headers['x-wp-totalpages']);

                console.log(setPackages)
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    useEffect(() => {
        fetch('http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4268')
            .then((response) => response.json())
            .then((data) => {
                setBg3(data.acf.bg);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="dlab-bnr-inr overlay-black-light" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Пакетные туры</h1>
                    </div>
                </div>
            </div>
            <div className="section-full bg-white content-inner dlab-about-1 promotions">
                <div className="container">
                    <div className="row packages">
                        {packages.map((item, index) => (
                            <div className="col-md-6 col-xl-3  col-sm-6 m-b20" key={index}>
                                <div className="dlab-box">
                                    <div className="dlab-media">
                                        <Link to={'./booking'}><img src={item.images[0].src} alt="" /> </Link>
                                    </div>
                                    <div className="dlab-info p-a15 border-1">
                                        <h4 className="dlab-title m-t0"><a href="booking-details.html">{item.name}</a></h4>
                                        <span className="location">{item.id}</span>
                                        <div className="package-content">
                                            <div className="clearfix">
                                                <span className="package-price pull-left text-primary">{item.price}Руб</span>
                                                <Link to={'/booking/' + item.id} className="site-button pull-right">Подробнее</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Packages;