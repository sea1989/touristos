import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';


const BlogLeftSidebar = () => {
    const [bg3, setBg3] = useState('');
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('https://xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/posts?categories=82')
            .then((response) => response.json())
            .then((data) => {
                setBlog(data.map((item) => ({
                    id: item.id,
                    title: item.title.rendered,
                    desc: item.acf.short_description,
                    date: item.date,
                    image: item.acf.ava,

                })));
            });
    }, []);

    useEffect(() => {
        fetch('https://xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4277')
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
                        <h1 className="text-white">Блог</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Главная</Link></li>
                                <li>Блог</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full content-inner-2 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 m-b10">
                            {blog.map((item, index) => (
                                <div className="blog-post blog-md clearfix" key={index}>
                                    <div className="dlab-post-media dlab-img-effect zoom-slow radius-sm">
                                        <Link to={'./blogdetails/' + item.id}><img src={item.image} alt="" /></Link>
                                    </div>
                                    <div className="dlab-post-info">
                                        <div className="dlab-post-meta">
                                            <ul className="d-flex align-items-center">
                                                <li className="post-date">{item.date}</li>
                                            </ul>
                                        </div>
                                        <div className="dlab-post-title ">
                                            <h4 className="post-title font-24"><Link to={'./blogdetails/' + item.id}>{item.title}</Link></h4>
                                        </div>
                                        <div className="dlab-post-text">
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className="dlab-post-readmore blog-share">
                                            <Link to={'./blogdetails/' + item.id} title="READ MORE" rel="bookmark" className="site-button-link border-link black">Подробнее</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )

}
export default BlogLeftSidebar;