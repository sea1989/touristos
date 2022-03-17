import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';


const aboutBlog = [
    {
        image: require('./../../images/blog/grid/pic1.jpg'),
        date: 'September 10, 2017',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic2.jpg'),
        date: 'September 10, 2017',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic3.jpg'),
        date: 'September 10, 2017',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic4.jpg'),
        date: 'September 10, 2017',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
]

var bg1 = require('./../../images/background/bg1.jpg');
var bg3 = 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/Чандолаз2.jpg';



class About extends Component {

    render() {

        return (
            <div>
                <Header />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">О Компании</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Главная</Link></li>
                                    <li>О Компании</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-block">
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="row align-items-start m-b20">
                                <div >
                                    <h2>Туристическая компания ООО «Новый Век»
                                    </h2>
                                </div>
                                <div >
                                    <p>Туристическая компания ООО «Новый Век» профессионально занимается туризмом с 1999 года.
                                        Менеджеры компании имеют многолетний опыт работы, высшее образование и специальное образование в сфере туризма.
                                        Компания работает в направлении оказания индивидуальных услуг по направлениям Европа и Азия, визирования и консультации,
                                        лечение за рубежом и в России, детские обучающие туры на Мальте и в Китае. Менеджеры компании в индивидуальном порядке подберут Вам любой тур в зависимости от вашего желания.
                                        Основным видом деятельности компании является развитие внутреннего туризма и его инфраструктуры.
                                        Организация экологических маршрутов по Приморскому краю, детских программ и экскурсий, организация лечебных и оздоровительных программ.
                                        Компания является собственником двух Центров экотуризма на острове Попова и под Партизанском. Мы окажем Вам услугу по аренде транспорта, как земного (авто), так и водного.
                                        Предоставим экскурсовода и проводника.

                                        Принцип нашей работы — надежность и высокое качество обслуживания, тщательный выбор партнера,
                                        внимательное и корректное отношение к нашим туристам и партнерам, разумные цены. Это очень хорошо знают наши постоянные туристы. За многие годы нашей работы мы ни разу их не подвели.</p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 m-b30 col-12">
                                    <img src='http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/08/DSC_2797-scaled.jpg' alt="" />
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
export default About;