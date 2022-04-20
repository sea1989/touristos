import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var aaa = document.querySelector('.myNavbar ');

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }

    }
    render() {
        return (
            <header className="site-header mo-left header">

                <div className="sticky-header navbar-expand-lg">
                    <div className="main-bar clearfix onepage">
                        <div className="container clearfix">
                            <div className="logo-header mostion">
                                <Link to={'./'} ><img src={require('./../../images/logo.png')} alt="logo" /></Link>
                            </div>
                            <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div className="dlab-quik-search bg-primary search-style-1">
                                <form action="#">
                                    <input name="search" type="text" className="form-control" placeholder="Type to search" />
                                    <span id="quik-search-remove"><i className="ti-close"></i></span>
                                </form>
                            </div>


                            <div className="header-nav navbar-collapse collapse navbar myNavbar justify-content-end" id="navbarNavDropdown">
                                <ul className="nav navbar-nav">
                                    <li><Link to={'/'}>Главная <i className="fa "></i></Link>

                                    </li>
                                    <li><Link> Услуги <i className="fa fa-chevron-down"></i></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'/place'} className="dez-page">Экскурсии</Link></li>
                                            <li><Link to={'/packages'} className="dez-page" >Туры</Link></li>
                                            <li><Link to={'/calendar'} className="dez-page">График маршрутов</Link></li>
                                        </ul>
                                    </li>

                                    <li><Link>Базы <i className="fa fa-chevron-down"></i></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'/baza_lipoviy_ver2'} className="dez-page">Урочище БОЛЬШОЙ ЛИПОВЫЙ</Link></li>
                                            <li><Link to={'/baza_saha_ver2'} className="dez-page">База отдыха "Мама-Саха</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={'/blogleftsidebar'}>Блог <i className="fa "></i></Link>

                                    </li>
                                    <li><Link>О нас <i className="fa fa-chevron-down"></i></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'/About'} className="dez-page">О компании</Link></li>
                                            <li><Link to={'/docs'} className="dez-page">Документы</Link></li>
                                            <li><Link to={'/contact'} className="dez-page">Контакты</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <div className="extra-nav">
                                            <div className="extra-cell">
                                                {/* <button id="quik-search-btn" type="button" className="site-button outline black"><i className="fa fa-search"></i></button> */}
                                                <Link to={"/payment"} className="site-button m-l5">Забронировать</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;