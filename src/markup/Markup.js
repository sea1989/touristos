import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './Layout/Header';
// import Footer from './Layout/Footer';
import Homepage from './Pages/Homepage';
import Homepage2 from './Pages/Homepage2';
import About from './Pages/About';
import Hotel from './Pages/Hotel';
import BookingDetails from './Pages/BookingDetails';
import Place from './Pages/Place';
import Packages from './Pages/Packages';
import Error404 from './Pages/Error';
// import Login from './Pages/Login';
import Login2 from './Pages/Login2';
import Register from './Pages/Register';
import Register2 from './Pages/Register2';
import ForgotPass from './Pages/ForgotPass';
import HotelBooking from './Pages/HotelBooking';
import BlogClassic from './Pages/BlogClassic';
import BlogClassicSidebar from './Pages/BlogClassicSidebar';
import BlogGrid from './Pages/BlogGrid';
import BlogGridSidebar from './Pages/BlogGridSidebar';
import BlogLeftSidebar from './Pages/BlogLeftSidebar';
import BlogDetails from './Pages/BlogDetails';
import PortfolioGrid2 from './Pages/PortfolioGrid2';
import Contacts from './Pages/Contacts';
import Popuss from './Pages/Tab';
import ListingDetails from './Pages/ListingDetails';
import BazaLipoviy from './Pages/BazaLipoviy';


class Markup extends Component {
    render() {
        return (
            <BrowserRouter basename="/react">
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/index-2' exact component={Homepage2} />
                        <Route path='/about' exact component={About} />
                        <Route path='/hotel' exact component={Hotel} />
                        <Route path='/booking/:id' exact component={BookingDetails} />
                        <Route path='/place' exact component={Place} />
                        <Route path='/packages' exact component={Packages} />
                        <Route path='/error' exact component={Error404} />
                        <Route path='/login' exact component={Login2} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/register2' exact component={Register2} />
                        <Route path='/forgot' exact component={ForgotPass} />
                        <Route path='/hotelbooking' exact component={HotelBooking} />
                        <Route path='/baza_lipoviy' exact component={BazaLipoviy} />
                        <Route path='/blogclassic' exact component={BlogClassic} />
                        <Route path='/blogclassicsidebar' exact component={BlogClassicSidebar} />
                        <Route path='/bloggrid' exact component={BlogGrid} />
                        <Route path='/bloggridsidebar' exact component={BlogGridSidebar} />
                        <Route path='/blogleftsidebar' exact component={BlogLeftSidebar} />
                        <Route path='/blogdetails' exact component={BlogDetails} />
                        <Route path='/portfolio2' exact component={PortfolioGrid2} />
                        <Route path='/contact' exact component={Contacts} />
                        <Route path='/popup' exact component={Popuss} />
                        <Route path='/listing' exact component={ListingDetails} />
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}

export default Markup;