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

var bg3 = require('./../../images/banner/bnr1.jpg');

class Place extends Component {

    constructor(props) {
        super(props);
        this.state = { dataPlaces: [] };
    }

    componentDidMount() {
        WooCommerce.get("products",

            {
                per_page: 50,
            },

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
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Туры</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Главная</Link></li>
                                    <li>Туры</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full bg-white content-inner dlab-about-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
  
                            </div>
                            <div className="col-lg-8 col-md-7 col-sm-7">
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
                                            <div className="dlab-box place-bx">
                                                <div className="dlab-media"> <Link><img src={item.images[0]?.src || 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2018/11/DSC_2797-scaled.jpg'} alt="" /></Link> </div>
                                                <div className="dlab-info p-tb30 p-lr10 text-center bg-gray">
                                                    <h4 className="dlab-title m-t0"><Link>{item.name}</Link></h4>
                                                    <p className="m-b10">{item.name}</p>
                                                    <Link to={'./booking/'+item.id} className="site-button outline radius-xl m-lr5">View Details</Link>
                                                    <Link to={'./booking'} className="site-button outline radius-xl m-lr5">View Map</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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