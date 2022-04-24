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

                    <div className="row" id="masonry">
                        {this.props.places.map((item, index) => (

                            <div className="col-md-12 col-lg-6 col-sm-12 m-b30" key={index}>
                                <div className="dlab-box place-bx top-item">
                                    <div className="dlab-media top-item__media"> <Link  to={'./booking/' + item.id}><img src={item.images[0]?.src || 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2018/11/DSC_2797-scaled.jpg'} alt="" /></Link> </div>
                                    <div className="dlab-info p-tb30 p-lr10 text-center bg-gray">
                                        <h4 className="dlab-title m-t0"><Link>{item.name}</Link></h4>
                                        <Link to={'./booking/' + item.id} className="site-button outline radius-xl m-lr5">Подробнее</Link>
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
