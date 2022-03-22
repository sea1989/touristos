import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
    url: 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/', // Your store URL
    consumerKey: 'ck_ec13b20905009b1ea7018f1696f5f0d45738b4a4', // Your consumer key
    consumerSecret: 'cs_524a79c134001e1c82f209675cf4d1303c8d3899', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

var bg1 = require('./../../images/background/bg1.jpg');
//var bg3 = require('./../../images/banner/bnr1.jpg');


const Place = () => {
    const [bg3, setBg3] = useState('');
    const [dataPlaces, setDataPlaces] = useState([]);
    const [pages, setPages] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryArray, setCategoryArray] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [nextButton, setNextButton] = useState(true);
    const [leftButton, setLeftButton] = useState(true);

    function nextPageHandler() {
        setCurrentPage(currentPage + 1);
    }

    function prevPageHandler() {
        setCurrentPage(currentPage - 1);
    }


    function handleChange(event) {
        console.log(event.target.value);

        const allForms = document.querySelectorAll('select.form-control');
        console.log([...allForms].map((item) => item.value));

        setCategoryArray(
            [...allForms].map((item) => item.value).reduce((acc, item) => item === 0 ? acc : [...acc, item], []),
        );
    }

    function handleSearch() {
        WooCommerce.get("products",

            {
                per_page: 12,
                search: searchValue,
                //category: 20,
            }
        )
            .then((response) => {
                setDataPlaces(response.data);
                setPages(response.headers['x-wp-totalpages']);
            })
            .catch((error) => {
                alert('страницы нет');
            });
    }

    function handleChangeType() {

        // fetch(`http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/product?product_cat[terms]=${this.state.categoryArray.toString()}&product_cat[operator]=AND&per_page=12`)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         this.setState({
        //             dataPlaces: data.map((item) => ({
        //                 images: [{ src: item.x_featured_media_medium }],
        //                 name: [item.title.rendered]
        //             })),
        //             //pages: response.headers['x-wp-totalpages']
        //         });
        //     });

        setCurrentPage(1);

        fetch(`http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/product?product_cat[terms]=${categoryArray.filter(item => item != 0).toString()}&product_cat[operator]=AND&per_page=12&page=${currentPage}`)
            .then((response) => {
                console.log(response.headers['X-WP-TotalPages']);
                setPages(response.headers['X-WP-TotalPages']);
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setDataPlaces(
                    data.map((item) => ({
                        images: [{ src: item.x_featured_media_medium }],
                        name: [item.title.rendered]
                    })),
                );
            })
            .catch((error) => {
                alert('страницы нет');
            });

        // WooCommerce.get("products",
        //     {
        //         per_page: 12,
        //         category: this.state.categoryArray.toString(),
        //         relation: 'AND',
        //         page: 1,
        //     },
        // )
        //     .then((response) => {
        //         this.setState({
        //             dataPlaces: response.data,
        //             pages: response.headers['x-wp-totalpages']
        //         });
        //         console.log(this.state.dataPlaces)
        //     })
        //     .catch((error) => {
        //         console.log(error.response.data);
        //     });

    }

    useEffect(() => {

        fetch(`http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/product?product_cat[terms]=${categoryArray.filter(item => item != 0).toString()}&product_cat[operator]=AND&per_page=12&page=${currentPage}`)
            .then((response) => {
                console.log(response.headers['X-WP-TotalPages']);
                setPages(response.headers['X-WP-TotalPages']);
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setDataPlaces(
                    data.map((item) => ({
                        images: [{ src: item.x_featured_media_medium }],
                        name: [item.title.rendered]
                    })),
                );
            })
            .catch((error) => {
                alert('страницы нет');
            });

        // WooCommerce.get("products",

        //     {
        //         per_page: 12,
        //         //category: 20,
        //     }
        // )
        //     .then((response) => {

        //         setDataPlaces(response.data);
        //         setPages(response.headers['x-wp-totalpages']);

        //         console.log(dataPlaces)
        //     })
        //     .catch((error) => {
        //         console.log(error.response.data);
        //     });
    }, [currentPage]);

    useEffect(() => {
        fetch('http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4268')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBg3(data.acf.bg);
            });
    }, []);


    // function changePage(page) {

    //     setCurrentPage(
    //         page
    //     );

    //     WooCommerce.get("products",

    //         {
    //             per_page: 12,
    //             category: categoryArray.toString(),
    //             page: page,
    //         },

    //     )
    //         .then((response) => {
    //             setDataPlaces(
    //                 response.data
    //             );
    //             setPages(
    //                 response.headers['x-wp-totalpages']
    //             );
    //             console.log(dataPlaces)
    //         })
    //         .catch((error) => {
    //             console.log(error.response.data);
    //         });
    // }

    return (
        <div>
            <Header />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Услуги</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li>Туры и Экскурсии</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-full book-form overlay-black-dark bg-img-fix p-t30 p-b10 mid" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                <div className="container">
                    <form className="row" onChange={handleChange}>

                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>Категории</label>
                            <select className="form-control">
                                <option value='0'>Любая</option>
                                <option value='0'>Обзорные</option>
                                <option value='20'>Морские</option>
                                <option value='0'>Познавательные</option>
                                <option value='23'>Пешеходные</option>
                                <option value='0'>Активные</option>
                                <option value='24'>Промышленные</option>
                                <option value='0'>Природные объекты</option>
                                <option value='21'>Город крепость</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>Вид тура</label>
                            <select className="form-control" >
                                <option value='0'>Любой</option>
                                <option value='23'>Пеший</option>
                                <option value='16'>Экскурсия</option>
                                <option value='60'>Тур</option>
                                <option value='0'>Катерный</option>
                                <option value='63'>Автобусный</option>
                                <option value='0'>Катер + автобус</option>
                                <option value='0'>Семейный</option>
                                <option value='61'>Детский</option>
                                <option value='0'>Активный</option>
                                <option value='0'>Обзорный</option>
                                <option value='0'>Индивидуальный</option>
                                <option value='0'>Групповой</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>Направления</label>
                            <select className="form-control">
                                <option value='0'>Любое</option>
                                <option value='0'>Горы</option>
                                <option value='0'>Острова</option>
                                <option value='54'>Заповедники</option>
                                <option value='0'>Базы отдыха</option>
                                <option value='0'>Лечение</option>
                                <option value='0'>Море</option>
                                <option value='0'>Водопады</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>Продолжительность</label>

                            <select className="form-control">
                                <option value='0'>Любая</option>
                                <option value='0'>1</option>
                                <option value='49'>2</option>
                                <option value='50'>3</option>
                                <option value='51'>4 отдыха</option>
                                <option value='0'>5 и более</option>
                            </select>

                        </div>
                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>География тура</label>
                            <select className="form-control">
                                <option value='0'>Любая</option>
                                <option value='0'>Большой липовый</option>
                                <option value='0'>Мама-Саха</option>
                                <option value='0'>Хасанский район</option>
                                <option value='0'>Заповедник</option>
                                <option value='0'>остальное Приморье</option>
                                <option value='0'>Алтай</option>
                                <option value='0'>Байкал</option>
                                <option value='0'>Москва</option>
                                <option value='0'>Россия</option>
                            </select>
                        </div>

                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group" onClick={handleChangeType}>
                            <label>Find</label>
                            <Link to={'/place'} className="site-button btn-block">Поиск</Link>
                        </div>
                    </form>
                </div>
            </div>

            <div className="section-full bg-white content-inner dlab-about-1">
                <div className="container">
                    <div className="row">

                        <div className="">
                            <div className="m-b10">
                                <form>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Начните вводить тур..."
                                                onChange={(event) => setSearchValue(
                                                    event.target.value
                                                )}
                                            />
                                            <span className="input-group-btn p-l15">
                                                <button
                                                    className="site-button"
                                                    type="button"
                                                    onClick={handleSearch}
                                                >Поиск</button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 m-b15">
                                    <h3 className="m-b5">Places in :</h3>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>

                                {dataPlaces.map((item, index) => (
                                    <div className="col-md-12 col-lg-6 col-sm-12 m-b30" key={index}>
                                        <div className="dlab-box place-bx top-item">
                                            <div className="dlab-media top-item__media"> <Link><img src={item.images[0]?.src || 'http://xn--b1aoke0e.xn--b1amiugdde.xn--p1ai/wp-content/uploads/2018/11/DSC_2797-scaled.jpg'} alt="" /></Link> </div>
                                            <div className="dlab-info p-tb30 p-lr10 text-center bg-gray">
                                                <h4 className="dlab-title m-t0"><Link>{item.name}</Link></h4>
                                                <p className="m-b10">{item.name}</p>
                                                <Link to={'./booking/' + item.id} className="site-button outline radius-xl m-lr5">Подробнее</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pagination-bx clearfix text-center">
                                <ul className="pagination">
                                    <li className="previous"><button
                                        className='button-place'
                                        onClick={prevPageHandler}
                                    ><i className="ti-arrow-left"></i> Prev</button></li>

                                    {/* {Array.apply(null, Array(+this.state.pages))?.map((item, i) => {
                                            return <li onClick={() => { this.changePage(i + 1) }}><Link>{i + 1}</Link></li>;
                                        })} */}

                                    <li className="next"><button
                                        className='button-place'
                                        onClick={nextPageHandler}
                                    >Next <i className="ti-arrow-right"></i></button></li>
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
export default Place;