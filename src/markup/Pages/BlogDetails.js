import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bg3 = require('./../../images/banner/bnr1.jpg');

const BlogDetails = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    useEffect(() => {
        fetch(`https://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setBlog(data);
                setContent(data.content.rendered);
                setDate(data.date);
                setTitle(data.title.rendered);
                setAuthor(data.author);
            });

    }, [id]);
    return (
        <div>
            <Header />
            <div className="dlab-bnr-inr overlay-black-light" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Blog Details</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Blog Details</li>
                            </ul>
                        </div>
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
                        {/* <div className="col-lg-4 col-md-5 sticky-top">
                            <aside className="side-bar">
                                <div className="widget">
                                    <h6 className="widget-title style-1">Search</h6>
                                    <div className="search-bx style-1">
                                        <form role="search" method="post">
                                            <div className="input-group">
                                                <input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="fa fa-search text-primary"></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget recent-posts-entry">
                                    <h6 className="widget-title style-1">Recent Posts</h6>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dlab-post-media"> <img src={require('./../../images/blog/recent-blog/pic1.jpg')} width="200" height="143" alt="" /> </div>
                                            <div className="dlab-post-info">
                                                <div className="dlab-post-header">
                                                    <h6 className="post-title"><Link href="blog-details.html">World’s largest Muslim group denounces Islamist extremism</Link></h6>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-date">Sep 18, 2017</li>
                                                        <li className="post-comment"><Link>5k</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="dlab-post-media"> <img src={require('./../../images/blog/recent-blog/pic2.jpg')} width="200" height="160" alt="" /> </div>
                                            <div className="dlab-post-info">
                                                <div className="dlab-post-header">
                                                    <h6 className="post-title"><Link href="blog-details.html">Five Solomon islands swallowed by the sea</Link></h6>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-date">Sep 18, 2017</li>
                                                        <li className="post-comment"><Link>5k</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="dlab-post-media"> <img src={require('./../../images/blog/recent-blog/pic3.jpg')} width="200" height="160" alt="" /> </div>
                                            <div className="dlab-post-info">
                                                <div className="dlab-post-header">
                                                    <h6 className="post-title"><Link href="blog-details.html">U.S. destroyer sails near disputed Chinese island</Link></h6>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-date">Sep 18, 2017</li>
                                                        <li className="post-comment"><Link>5k</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget widget_gallery gallery-grid-3">
                                    <h6 className="widget-title style-1">Our services</h6>
                                    <ul>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic2.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic1.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic5.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic7.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic8.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic9.jpg')} alt="" /></Link></div></li>
                                    </ul>
                                </div>
                                <div className="widget widget_archive">
                                    <h6 className="widget-title style-1">Categories List</h6>
                                    <ul>
                                        <li><Link>aciform</Link></li>
                                        <li><Link>championship</Link></li>
                                        <li><Link>chastening</Link></li>
                                        <li><Link>clerkship</Link></li>
                                        <li><Link>disinclination</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-newslatter">
                                    <h6 className="widget-title style-1">Newsletter</h6>
                                    <div className="news-box">
                                        <p>Enter your e-mail and subscribe to our newsletter.</p>
                                        <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                            <div className="dzSubscribeMsg"></div>
                                            <div className="input-group">
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email" />
                                                <button name="submit" value="Submit" type="submit" className="site-button btn-block radius-no">Subscribe Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </aside>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default BlogDetails;