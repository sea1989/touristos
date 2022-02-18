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

                <div className="section-full book-form overlay-black-dark bg-img-fix p-t30 p-b10 mid" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                    <div className="container">
                        <form className="row">
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Keywords</label>
                                <input className="form-control" placeholder="Enter Zip Code" type="text" />
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Activity</label>
                                <select className="form-control">
                                    <option>Any</option>
                                    <option>City Tours</option>
                                    <option>Cultural &amp; Thematic Tours</option>
                                    <option>Family Friendly Tours</option>
                                    <option>Holiday &amp; Seasonal Tours</option>
                                    <option>Indulgence &amp; Luxury Tours</option>
                                    <option>Outdoor Activites</option>
                                    <option>Relaxation Tours</option>
                                    <option>Wild &amp; Adventure Tours</option>
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Destination</label>
                                <select className="form-control">
                                    <option>Any</option>
                                    <option>City Tours</option>
                                    <option>Cultural &amp; Thematic Tours</option>
                                    <option>Family Friendly Tours</option>
                                    <option>Holiday &amp; Seasonal Tours</option>
                                    <option>Indulgence &amp; Luxury Tours</option>
                                    <option>Outdoor Activites</option>
                                    <option>Relaxation Tours</option>
                                    <option>Wild &amp; Adventure Tours</option>
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Duration</label>
                                <select className="form-control">
                                    <option>Any</option>
                                    <option>City Tours</option>
                                    <option>Cultural &amp; Thematic Tours</option>
                                    <option>Family Friendly Tours</option>
                                    <option>Holiday &amp; Seasonal Tours</option>
                                    <option>Indulgence &amp; Luxury Tours</option>
                                    <option>Outdoor Activites</option>
                                    <option>Relaxation Tours</option>
                                    <option>Wild &amp; Adventure Tours</option>
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Date</label>
                                <input type='text' className="form-control" id='datetimepicker4' />
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Find</label>
                                <Link to={'/place'} className="site-button btn-block">SEARCH</Link>
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
                                            <div className="dlab-box place-bx">
                                                <div className="dlab-media"> <Link><img src={item.images[0]?.src || 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2018/11/DSC_2797-scaled.jpg'} alt="" /></Link> </div>
                                                <div className="dlab-info p-tb30 p-lr10 text-center bg-gray">
                                                    <h4 className="dlab-title m-t0"><Link>{item.name}</Link></h4>
                                                    <p className="m-b10">{item.name}</p>
                                                    <Link to={'./booking/' + item.id} className="site-button outline radius-xl m-lr5">View Details</Link>
                                                    <Link to={'./booking'} className="site-button outline radius-xl m-lr5">View Map</Link>
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