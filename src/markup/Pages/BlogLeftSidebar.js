import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

const leftImg = [
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/08/DSC_2797-scaled.jpg',
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'Релакс-тур «ПЕРЕЗАГРУЗКА»',
        desc: 'Приглашаем всех после тяжелой рабочей недели, туманов и промозглой приморской погоды посетить МЦ "Океан", расположенный на берегу амурского залива, в лесном массиве. Посвятить немного времени для себя любимых, подарить [...]',

    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/08/DSC_2797-scaled.jpg',
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'Релакс-тур «ПЕРЕЗАГРУЗКА»',
        desc: 'Приглашаем всех после тяжелой рабочей недели, туманов и промозглой приморской погоды посетить МЦ "Океан", расположенный на берегу амурского залива, в лесном массиве. Посвятить немного времени для себя любимых, подарить [...]',
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/08/DSC_2797-scaled.jpg',
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'Релакс-тур «ПЕРЕЗАГРУЗКА»',
        desc: 'Приглашаем всех после тяжелой рабочей недели, туманов и промозглой приморской погоды посетить МЦ "Океан", расположенный на берегу амурского залива, в лесном массиве. Посвятить немного времени для себя любимых, подарить [...]',
    },
    {
        image: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2021/08/DSC_2797-scaled.jpg',
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        desc: 'Приглашаем всех после тяжелой рабочей недели, туманов и промозглой приморской погоды посетить МЦ "Океан", расположенный на берегу амурского залива, в лесном массиве. Посвятить немного времени для себя любимых, подарить [...]', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.',

    },
]


var bg3 = 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2022/02/baza_lipoviy.jpg';

const BlogLeftSidebar = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/posts?categories=82')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBlog(data.map((item) => ({
                    id: item.id,
                    title: item.title.rendered,
                    desc: item.acf.short_description,
                    date: item.date,
                    image: item.acf.ava,

                })));
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
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
                                        <Link><img src={item.image} alt="" /></Link>
                                    </div>
                                    <div className="dlab-post-info">
                                        <div className="dlab-post-meta">
                                            <ul className="d-flex align-items-center">
                                                <li className="post-date">{item.date}</li>
                                            </ul>
                                        </div>
                                        <div className="dlab-post-title ">
                                            <h4 className="post-title font-24"><Link href="blog-details.html">{item.title}</Link></h4>
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

                            <div className="pagination-bx clearfix text-center">
                                <ul className="pagination">
                                    <li className="previous"><Link><i className="ti-arrow-left"></i> Prev</Link></li>
                                    <li className="active"><Link>1</Link></li>
                                    <li><Link>2</Link></li>
                                    <li><Link>3</Link></li>
                                    <li className="next"><Link>Next <i className="ti-arrow-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )

}
export default BlogLeftSidebar;