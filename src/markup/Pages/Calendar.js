
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Calendar = () => {

    const [schedule, setShedule] = useState([]);
    const [bg3, setBg3] = useState('');

    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbzySd6YzTKgOXWtFsyV4fR4Xu7E2EbMbPyKqf5tBVgr2Adz1wXgQIzKKorDxGwt3Uuj/exec?role=true')
            .then((response) => response.json())
            .then((data) => {
                setShedule(data.users.map((item) => ({
                    time: item.time,
                    price: item.price,
                    excursion: item.excursion,
                    date: new Date(item.date).toLocaleDateString(),
                })));
            });
    }, []);

    useEffect(() => {
        fetch('http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4272')
            .then((response) => response.json())
            .then((data) => {
                setBg3(data.acf.bg);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="dlab-bnr-inr overlay-black-light" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">График маршрутов</h1>
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


                        <figure className="wp-block-table is-style-stripes"><table><tbody>
                            <tr><td><strong>Дата</strong></td><td><strong>Экскурсия</strong></td><td><strong>Время, час</strong></td><td><strong>Стоимость, руб.</strong></td></tr>

                            {schedule.map((item, index) =>
                                <tr key={index}><td>{item.date}</td><td>{item.excursion}</td><td>{item.time}</td><td>{item.price}</td></tr>
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
