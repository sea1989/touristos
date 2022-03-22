
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Calendar = () => {

    const [schedule, setShedule] = useState([]);
    const [bg3, setBg3] = useState('');

    useEffect(() => {
        fetch('http://script.google.com/macros/s/AKfycbz-hv2WHII5c9twzwelsxXD9FINT2Yl16XIbGy_vpRlQp0h8EEBMuz2vLHbryZb1ETG/exec?role=true')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.users);
                setShedule(data.users.map((item) => ({
                    time: item.time,
                    price: item.price,
                    excursion: item.excursion,
                    date: item.date,
                })));
            });
    }, []);

    useEffect(() => {
        fetch('http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4272')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBg3(data.acf.bg);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">График маршрутов</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Главная</Link></li>
                                <li>График маршрутов</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-block">
                <div className="section-full content-inner bg-white portfolio-box">
                    <div className="container">
                        <div className="section-head text-black text-center m-b20">
                            <h2 className="m-b10">График маршрутов</h2>
                            <p>Здесь вы можете ознакомиться с акутуальным графиком</p>
                        </div>


                        <figure class="wp-block-table is-style-stripes"><table><tbody>
                            <tr><td><strong>Дата</strong></td><td><strong>Экскурсия</strong></td><td><strong>Время, час</strong></td><td><strong>Стоимость, руб.</strong></td></tr>

                            {schedule.map((item) =>
                                <tr><td>{item.date}</td><td>{item.excursion}</td><td>{item.time}</td><td>{item.price}</td></tr>
                            )}

                        </tbody></table></figure>

                    </div>
                </div>
            </div >

            <Footer />
        </div >
    )

}
export default Calendar;
