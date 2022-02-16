import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';

const hotelContent = [
    {
        image: require('./../../images/gallery/img7.jpg'),
        title: 'Commodi',
        offer: '3 nights + Flight 5*Hotel',
        price: '400',

    },
    {
        image: require('./../../images/gallery/img2.jpg'),
        title: 'Natus',
        offer: '3 nights + Flight 5*Hotel',
        price: '450',

    },
    {
        image: require('./../../images/gallery/img3.jpg'),
        title: 'Dolores',
        offer: '3 nights + Flight 5*Hotel',
        price: '400',

    },
    {
        image: require('./../../images/gallery/img4.jpg'),
        title: 'Consectetur',
        offer: '3 nights + Flight 5*Hotel',
        price: '200',

    },
    {
        image: require('./../../images/gallery/img5.jpg'),
        title: 'Eiusmod',
        offer: '3 nights + Flight 5*Hotel',
        price: '100',

    },
    {
        image: require('./../../images/gallery/img6.jpg'),
        title: 'Proident',
        offer: '3 nights + Flight 5*Hotel',
        price: '300',

    },
]

var bg3 = require('./../../images/banner/bnr1.jpg');

class Hotel extends Component {

    render() {
        return (
            <div>
                <Header2 />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Hotel</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Home</Link></li>
                                    <li>Hotel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white content-inner dlab-about-1">
                    <div className="container">
                        <div className="section-head text-black text-center">
                            <h2 className="m-b0 text-uppercase">Popular hotel destinations</h2>
                            <p className="font-18">If you’re looking for a truly memorable family break, here you find the lowest price on the right hotel for you. It's indescribable.</p>
                        </div>
                        <div className="row">
                            {hotelContent.map((item, index) => (
                                <div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={index}>
                                    <div className="dlab-box hotal-box" data-tilt data-tilt-max="10" data-tilt-speed="1">
                                        <div className="dlab-media dlab-img-effect dlab-img-overlay2">
                                            <img src={item.image} alt="" />
                                            <div className="dlab-info-has p-a20 text-white no-hover">
                                                <h4 className="m-t0 m-b10">{item.title}</h4>
                                                <span>{item.offer}</span>
                                                <h2 className="m-t10 m-b20">$ {item.price}</h2>
                                                <Link to={'./hotelbooking'} className="site-button outline outline-2 radius-xl">Book Now</Link>
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
}
export default Hotel;