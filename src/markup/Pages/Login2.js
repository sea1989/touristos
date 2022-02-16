import React, { Component } from 'react';
// import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Slick3 from './Slick3';



class Login2 extends Component {

    render() {


        return (
            <div>
                <div class="page-content dlab-login font-roboto">
                    <div class="container-fluid p-lr0">
                        <div class="row m-lr0 login-form-box">
                            <div class="col-lg-4 p-lr0">
                                <div class="login-form">
                                    <div class="logo logo-header">
                                    <Link to={'./'}><img src={require('./../../images/logo-2.png')} alt="" /></Link>
                                    </div>
                                    <div id="login" class="tab-pane">
                                        <form class="dlab-form">
                                            <div class="form-head">
                                                <h3 class="form-title m-t0">We Are <span class="text-primary">Triper</span></h3>
                                                <p class="title-text">Welcome back, please login<br /> to your account</p>
                                            </div>
                                            <div class="form-group-bx">
                                                <div class="form-group input-form">
                                                    <label>Email Address</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="info123@example.com" type="text" />
                                                </div>
                                                <div class="form-group input-form">
                                                    <label>Password</label>
                                                    <input name="dzName" required="" class="form-control " placeholder="Type Password" type="password" value="123456789" />
                                                </div>
                                            </div>
                                            <div class="form-group field-btn text-left">
                                                <div class="input-block">
                                                    <input id="check1" type="checkbox" />
                                                    <label for="check1">Remember me</label>
                                                </div>
                                                <Link to={'./forgot'} class="btn-link forgot-password"> Forgot Password</Link>
                                            </div>
                                            <div class="form-group">
                                                <button class="site-button black m-r10">login</button>
                                                <Link to={'./register'} class="site-button outline">Sign Up</Link>
                                            </div>
                                        </form>
                                    </div>


                                </div>
                            </div>
                            <div class="col-lg-8 p-lr0">
                                <Slick3 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login2;