import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Inst from '../../images/icon/iconsinstagram.png';
import Telegram from '../../images/icon/iconstelegram.png';

import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bg3 = 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/baza_lipoviy.jpg';
class Contacts extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Контакты</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Главная</Link></li>
                                    <li>Контакты</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full content-inner bg-white contact-style-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                                <div className="p-a30 border m-b30 contact-area border-1 align-self-stretch ">
                                    <h4 className="m-b10">Контакты</h4>
                                    <p>Если у Вас есть какой-либо вопрос свяжитесь с нами удобным для Вас способом</p>
                                    <ul className="no-margin">
                                        <li className="icon-bx-wraper left m-b30">
                                            <div className="icon-bx-xs border-1"> <Link className="icon-cell"><i className="ti-location-pin"></i></Link> </div>
                                            <div className="icon-content">
                                                <h6 className="text-uppercase m-tb0 dlab-tilte">Адрес:</h6>
                                                <p>Владивосток, ул. Алеутская 28, офис 207</p>
                                            </div>
                                        </li>
                                        <li className="icon-bx-wraper left  m-b30">
                                            <div className="icon-bx-xs border-1"> <Link className="icon-cell"><i className="ti-email"></i></Link> </div>
                                            <div className="icon-content">
                                                <h6 className="text-uppercase m-tb0 dlab-tilte">Email:</h6>
                                                <p>turistdv@bk.ru</p>
                                            </div>
                                        </li>
                                        <li className="icon-bx-wraper left">
                                            <div className="icon-bx-xs border-1"> <Link className="icon-cell"><i className="ti-mobile"></i></Link> </div>
                                            <div className="icon-content">
                                                <h6 className="text-uppercase m-tb0 dlab-tilte">Телефон</h6>
                                                <p> +7 423 290-94-10</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="m-t20">
                                        <ul className="dlab-social-icon dlab-social-icon-lg">
                                        <li><Link to={'https://www.instagram.com/vldvtour/'} className="site-button instagram sharp"><img src={Inst} width="16px" height="16px" alt="instagram" /><i className="fa "></i></Link></li>
                                    <li><Link to={'https://t.me/vldvtour'} className="site-button sharp"><i className="fa"><img src={Telegram} width="16px" height="16px" alt="telegram" /></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="p-a30 m-b30 	bg-gray clearfix">
                                    <h4>Напишите нам письмо</h4>
                                    <div className="dzFormMsg"></div>
                                    <form method="post" className="dzForm" action="script/contact.php">
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" type="text" required className="form-control" placeholder="Ваше имя" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzEmail" type="email" className="form-control" required placeholder="Ваша почта" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Ваще сообщение..."></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                        <input className="form-control d-none" data-recaptcha="true" data-error="Please complete the Captcha" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button name="submit" type="submit" value="Submit" className="site-button "> <span>Отправить</span> </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 d-lg-flex m-b30">
                                <iframe title="This is a unique title" src="https://yandex.ru/map-widget/v1/?um=constructor%3Adebb49e651a6cc6ff194d513dcbdb3b6787745f0de4aecb30e0524c6c95cc0b0&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Contacts;