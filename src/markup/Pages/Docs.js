import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

export default function Docs() {
    const [bg3, setBg3] = useState('');
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        fetch('http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/pages/4230')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDocs({
                    content: data.content.rendered,
                });
            });
    }, []);

    useEffect(() => {
        fetch('http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4274')
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
                        <h1 className="text-white">Документы</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Главная</Link></li>
                                <li>Документы</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-block">
                <div className="section-full content-inner">
                    <div className="container">
                        <div>
                            <div >
                                <h2>Документы
                                </h2>
                            </div>
                            <div >
                                <p dangerouslySetInnerHTML={{ __html: docs.content }} />
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
