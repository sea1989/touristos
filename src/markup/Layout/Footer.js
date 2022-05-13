import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Point from '../../images/icon/iconsmap.png';
import Tel from '../../images/icon/iconsphone.png';
import WhatsApp from '../../images/icon/iconswhatsapp.png';
import Mail from '../../images/icon/iconsmail.png';
import Telegram from '../../images/icon/iconstelegram.png';




function Footer() {

    const [bg3, setBg3] = useState('');

    useEffect(() => {
        fetch('https://xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4285')
            .then((response) => response.json())
            .then((data) => {
                setBg3(data.acf.bg);
            });
    }, []);

    function formHandler() {
        fetch('https://xn--b1amiugdde.xn--p1ai/wp-json/contact-form-7/v1/contact-forms/4289/feedback',
            { method: 'POST', body: new FormData(document.querySelector('#formFooter')) })
    }

    return (

        <footer className="site-footer style1">
            <div className="footer-top" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-5 footer-col-4">
                            <div className="widget widget_getintuch">
                                <h6 className="m-b15 h6 text-uppercase">Инфо</h6>
                                <div className="dlab-separator bg-white"></div>
                                <ul className="info-contact">
                                    <li>
                                        <span>
                                            <i className="fa"> <img src={Point} width="32px" height="32px" alt="point" /></i> Владивосток, ул. Алеутская 28, офис 207
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <i className="fa"><img src={Tel} width="32px" height="32px" alt="point" /></i> Позвонить нам: <a href="tel: +7 423 290-94-10">+7 423 290-94-10</a>,
                                            <a href="tel: +7 914 791-49-05"> +7 914 791-49-05,</a> <a href="tel: +7 423 290-94-10">+7 423 290-94-10</a>
                                            {/* <Button label="Write me an E-Mail" mailto="mailto:no-reply@example.com" /> <bi */}
                                        </span>

                                    </li>

                                    <li>
                                        <span>
                                            <i className="fa"><img src={Mail} width="32px" height="32px" alt="mail" /></i><a href="mailto: turistdv@bk.ru"> Mail: turistdv@bk.ru </a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa"><img src={WhatsApp} width="32px" height="32px" alt="whatsapp" /></i><a href='https://wa.me/79147914905?text=Здравствуйте%2C+у+меня+есть+вопрос'> WhatsApp: 8(914)791-49-05 </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <ul className="list-inline">
                                <li><Link to={'https://t.me/vldvtour'} className="site-button sharp"><i className="fa"><img src={Telegram} width="16px" height="16px" alt="telegram" /></i></Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-7 footer-col-4">
                            <div className="widget  widget_tag_cloud">
                                <h6 className="m-b15 h6 text-uppercase">Темы</h6>
                                <div className="dlab-separator bg-white"></div>
                                <div className="tagcloud">
                                    <Link to={''}>Услуги</Link>
                                    <Link to={''}>Туры</Link>
                                    <Link to={''}>Экскрурсии</Link>
                                    <Link to={''}>Морские</Link>
                                    <Link to={''}>Пешеходные</Link>
                                    <Link to={''}>Крепость</Link>
                                    <Link to={''}>Отдых</Link>
                                    <Link to={''}>Релакс</Link>
                                    <Link to={''}>Туризм</Link>
                                    <Link to={''}>Городские</Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                            <div className="widget widget_getintuch">
                                <h6 className="m-b15 h6 text-uppercase">Написать нам</h6>
                                <div className="dlab-separator bg-white"></div>
                                <div className="search-bx">
                                    <div className="dzFormMsg"></div>
                                    <form className="dzForm" id="formFooter">
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                        <div className="input-group">
                                            <input name="fio" type="text" required className="form-control" placeholder="Ваше имя" />
                                        </div>
                                        <div className="input-group">
                                            <input name="email" type="email" className="form-control" required placeholder="Ваша почта" />
                                        </div>
                                        <div className="input-group">
                                            <textarea name="comments" rows="4" className="form-control" required placeholder="Ваше сообщение..."></textarea>
                                        </div>
                                        <div className="input-group">
                                            <button
                                                onClick={formHandler}
                                                type="submit"
                                                className="site-button"
                                            > <span>Отправить</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row link-dev">
                        <div className="col-lg-6 col-md-6 text-left "><span><a href='https://pena.marketing' > Powered by Pena Co., Ltd. </a></span> </div>
                        <div className="col-lg-6 col-md-6 text-right"> <span> Copyright @ 2022 ТК “Новый век” </span></div>

                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer;