import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class TopPlaces extends Component {

    render() {
        return (
            <div className="section-full bg-white content-inner dlab-about-1 promotions" id="about-us">
                <div className="container">
                    <div className="section-head text-center">
                        <h2 className="text-uppercase m-b0">ТОП МЕСТ</h2>
                        <p className="font-18">ЛУЧШИЕ ТУРИСТИЧЕСКИЕ ПАКЕТЫ</p>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-8 col-sm-8 col-lg-9 form-group align-self-center text-left">
                            <button className="site-button m-b5 mr-1">Обзорные</button>
                            <button className="site-button m-b5 mr-1">Морские</button>
                            <button className="site-button m-b5 mr-1">Познавательные</button>
                            <button className="site-button m-b5 mr-1">Пешеходные</button>
                            <button className="site-button m-b5 mr-1">Активные</button>
                            <button className="site-button m-b5 mr-1">Промышленные</button>
                            <button className="site-button m-b5 mr-1">Природные объекты</button>
                            <button className="site-button m-b5 mr-1">Город крепость</button>
                        </div>
                        <div className="col-md-4 col-sm-4 col-lg-3 form-group">
                            <select className="form-control">
                                <option>Relevent</option>
                                <option>High to Low</option>
                                <option>Low to High</option>
                            </select>
                        </div>
                    </div>
                    <div className="row" id="masonry">
                        {this.props.places.map((item, index) => (

                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30 card-container" key={index}>
                                <div className="dlab-box top-item">
                                    <div className="dlab-media top-item__media">
                                        <Link to={'./booking'}>
                                            <img src={item.images[0]?.src || 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2018/11/DSC_2797-scaled.jpg'} alt="" />
                                        </Link>
                                        <div className="tr-price">
                                            <span>{item.price} РУБ</span>
                                        </div>
                                    </div>
                                    <div className="dlab-info p-a20 border-1 text-center">
                                        <h4 className="dlab-title m-t0"><Link to={'./booking'}>{item.name}</Link></h4>
                                        <p>{item.name}</p>

                                        <div className="tr-btn-info">
                                            <Link to={'./booking'} className="site-button radius-no"><i className="fa fa-location-arrow" aria-hidden="true"></i> Russia</Link>
                                            <Link to={'./booking'} className="site-button bg-primary-dark radius-no"><i className="fa fa-info-circle" aria-hidden="true"></i>  Relax </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default TopPlaces;