import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

const BlogDetails = () => {
    const [bg3, setBg3] = useState('');
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetch(`https://xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.content.rendered);
                setDate(data.date);
                setTitle(data.title.rendered);
                setAuthor(data.author);
            });

    }, [id]);

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
                    </div>
                </div>
            </div>
            <div className="section-full content-inner-2 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 m-b10">
                            <div className="blog-post blog-single blog-style-1">
                                <div className="dlab-post-meta">
                                    <ul className="d-flex align-items-center">
                                        {/* //September 18, 2017 s*/}
                                        <li className="post-date">{date}</li>
                                        <li className="post-author">By <Link>{author}</Link> </li>
                                        <li className="post-comment"><Link>5k</Link> </li>
                                    </ul>
                                </div>
                                <div className="dlab-post-title">
                                    <h4 className="post-title m-t0"><Link>{title}</Link></h4>
                                </div>

                                <div className="dlab-post-text">
                                    <p dangerouslySetInnerHTML={{ __html: content }} />
                                </div>

                                <div className="dlab-divider bg-gray-dark op4"><i className="icon-dot c-square"></i></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default BlogDetails;