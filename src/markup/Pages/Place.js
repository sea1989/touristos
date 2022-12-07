import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
    url: 'https://xn--b1amiugdde.xn--p1ai/', // Your store URL
    consumerKey: 'ck_ec13b20905009b1ea7018f1696f5f0d45738b4a4', // Your consumer key
    consumerSecret: 'cs_524a79c134001e1c82f209675cf4d1303c8d3899', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

var bg1 = require('./../../images/background/bg1.jpg');
//var bg3 = require('./../../images/banner/bnr1.jpg');


const Place = () => {

    const dispatch = useDispatch()
    const categoryStore = useSelector(state => state.categoryArray)

    const [bg3, setBg3] = useState('');
    const [dataPlaces, setDataPlaces] = useState([]);
    const [pages, setPages] = useState('');
    const [currentPage, setCurrentPage] = useState({ number: 1 });
    const [categoryArray, setCategoryArray] = useState(categoryStore);
    const [searchValue, setSearchValue] = useState('');

    const [nextButton, setNextButton] = useState(true);
    const [leftButton, setLeftButton] = useState(true);

    function nextPageHandler() {
        setCurrentPage({ number: currentPage.number + 1 });
    }

    function prevPageHandler() {
        setCurrentPage({ number: currentPage.number - 1 });
    }

    function getArray(allForms) {
        return [...allForms]
            .map((item) => item.value)
            .reduce((acc, item) => item === 0 ? acc : [...acc, item], [])
    }

    function handleChange(event) {
        const allForms = document.querySelectorAll('select.form-control');
        const array = getArray(allForms)
        setCategoryArray([...array])
    }

    function handleSearch() {
        WooCommerce.get(
            "products",
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
        dispatch({ type: 'ADD_CATEGORIES', payload: categoryArray });
        setCurrentPage({ number: 1 });
    }

    function fetchData() {
        fetch(
            `https://xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/product?product_cat[terms]=${categoryArray
                .filter((item) => item != 0)
                .toString()}&product_cat[operator]=AND&per_page=12&page=${currentPage.number
            }`
        )
            .then((response) => {
                setPages(response.headers["X-WP-TotalPages"]);
                return response.json();
            })
            .then((data) => {
                setDataPlaces(
                    data.map((item) => ({
                        images: [{ src: item.x_featured_media_medium }],
                        name: [item.title.rendered],
                        id: item.id,
                    }))
                );
            })
            .catch((error) => {
                alert("страницы нет");
            });
    }

    useEffect(() => {
        fetchData()
    }, [currentPage]);

    useEffect(() => {
        fetch('https://xn--b1amiugdde.xn--p1ai/wp-json/wp/v2/bgpages/4272')
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
                        <h1 className="text-white">Экскурсии и туры</h1>
                    </div>
                </div>
            </div>

            <div className="section-full book-form overlay-black-dark bg-img-fix p-t30 p-b10 mid" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                <div className="container">
                    <form className="row" onChange={handleChange}>

                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>Категории</label>
                            <select className="form-control">
                                <option value='0' selected={categoryArray[0] == '0'}>Любая</option>
                                <option value='0' selected={categoryArray[0] == ''}>Обзорные</option>
                                <option value='20' selected={categoryArray[0] == '20'}>Морские</option>
                                <option value='0' selected={categoryArray[0] == ''}>Познавательные</option>
                                <option value='23' selected={categoryArray[0] == '23'}>Пешеходные</option>
                                <option value='0' selected={categoryArray[0] == ''}>Активные</option>
                                <option value='24' selected={categoryArray[0] == '24'}>Промышленные</option>
                                <option value='0' selected={categoryArray[0] == ''}>Природные объекты</option>
                                <option value='21' selected={categoryArray[0] == '21'}>Город крепость</option>
                            </select >
                        </div >
                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>Вид тура</label>
                            <select className="form-control" >
                                <option value='0' selected={categoryArray[1] == ''}>Любой</option>
                                <option value='23' selected={categoryArray[1] == '23'}>Пеший</option>
                                <option value='16' selected={categoryArray[1] == '16'}>Экскурсия</option>
                                <option value='60' selected={categoryArray[1] == '60'}>Тур</option>
                                <option value='0' selected={categoryArray[1] == ''}>Катерный</option>
                                <option value='63' selected={categoryArray[1] == '63'}>Автобусный</option>
                                <option value='0' selected={categoryArray[1] == ''}>Катер + автобус</option>
                                <option value='0' selected={categoryArray[1] == ''}>Семейный</option>
                                <option value='61' selected={categoryArray[1] == '61'}>Детский</option>
                                <option value='0' selected={categoryArray[1] == ''}>Активный</option>
                                <option value='0' selected={categoryArray[1] == ''}>Обзорный</option>
                                <option value='0' selected={categoryArray[1] == ''}>Индивидуальный</option>
                                <option value='0' selected={categoryArray[1] == ''}>Групповой</option>
                            </select >
                        </div >
                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>Направления</label>
                            <select className="form-control">
                                <option value='0' selected={categoryArray[2] == ''}>Любое</option>
                                <option value='0' selected={categoryArray[2] == ''}>Горы</option>
                                <option value='0' selected={categoryArray[2] == ''}>Острова</option>
                                <option value='54' selected={categoryArray[2] == '54'}>Заповедники</option>
                                <option value='0' selected={categoryArray[2] == ''}>Базы отдыха</option>
                                <option value='0' selected={categoryArray[2] == ''}>Лечение</option>
                                <option value='0' selected={categoryArray[2] == ''}>Море</option>
                                <option value='0' selected={categoryArray[2] == ''}>Водопады</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>Продолжительность</label>

                            <select className="form-control">
                                <option value='0' selected={categoryArray[3] == ''}>Любая</option>
                                <option value='0' selected={categoryArray[3] == ''}>1</option>
                                <option value='49' selected={categoryArray[3] == '49'}>2</option>
                                <option value='50' selected={categoryArray[3] == '50'}>3</option>
                                <option value='51' selected={categoryArray[3] == '51'}>4 отдыха</option>
                                <option value='0' selected={categoryArray[3] == ''}>5 и более</option>
                            </select>

                        </div>
                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                            <label>География тура</label>
                            <select className="form-control">
                                <option value='0' selected={categoryArray[4] == ''}>Любая</option>
                                <option value='0' selected={categoryArray[4] == ''}>Большой липовый</option>
                                <option value='0' selected={categoryArray[4] == ''}>Мама-Саха</option>
                                <option value='0' selected={categoryArray[4] == ''}>Хасанский район</option>
                                <option value='0' selected={categoryArray[4] == ''}>Заповедник</option>
                                <option value='0' selected={categoryArray[4] == ''}>остальное Приморье</option>
                                <option value='0' selected={categoryArray[4] == ''}>Алтай</option>
                                <option value='0' selected={categoryArray[4] == ''}>Байкал</option>
                                <option value='0' selected={categoryArray[4] == ''}>Москва</option>
                                <option value='0' selected={categoryArray[4] == ''}>Россия</option>
                            </select>
                        </div>

                        <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group button__search" onClick={handleChangeType}>
                            <Link to={'/place'} className="site-button btn-block">Поиск</Link>
                        </div>
                    </form >
                </div >
            </div >

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
                                                placeholder="Поиск..."
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
                                    <h3 className="m-b5">Экскурсии и туры:</h3>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>

                                {dataPlaces.map((item, index) => (
                                    <div className="col-md-12 col-lg-6 col-sm-12 m-b30" key={index}>
                                        <div className="dlab-box place-bx top-item">
                                            <div className="dlab-media top-item__media"> <Link to={'./booking/' + item.id}><img src={item.images[0]?.src || 'https://xn--b1amiugdde.xn--p1ai/wp-content/uploads/2018/11/DSC_2797-scaled.jpg'} alt="" /></Link> </div>
                                            <div className="dlab-info p-tb30 p-lr10 text-center bg-gray">
                                                <h4 className="dlab-title m-t0"><Link>{item.name}</Link></h4>
                                                <Link to={'./booking/' + item.id} className="site-button outline radius-xl m-lr5">Подробнее</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pagination-bx clearfix text-center">
                                <ul className="pagination">
                                    <li className="previous"><button
                                        className='button-place site-button'
                                        onClick={prevPageHandler}
                                    ><i className="ti-arrow-left"></i> Предыдущая страница</button></li>

                                    {/* {Array.apply(null, Array(+this.state.pages))?.map((item, i) => {
                                            return <li onClick={() => { this.changePage(i + 1) }}><Link>{i + 1}</Link></li>;
                                        })} */}

                                    <li className="next"><button
                                        className='button-place site-button'
                                        onClick={nextPageHandler}
                                    >Следующая страница <i className="ti-arrow-right"></i></button></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )

}
export default Place;