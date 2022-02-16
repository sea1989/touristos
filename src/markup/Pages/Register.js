import React, { Component } from 'react'

class Register extends Component {

    render() {
        return (
            <div className="section-full content-inner-2 shop-account bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="font-weight-700 m-t0 m-b20">Create An Account</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="p-a30 border-1  max-w500 m-auto">
                                <div className="tab-content">
                                    <form id="login" className="tab-pane active">
                                        <h4 className="font-weight-700">PERSONAL INFORMATION</h4>
                                        <p className="font-weight-600">If you have an account with us, please log in.</p>
                                        <div className="form-group">
                                            <label className="font-weight-700">First Name *</label>
                                            <input name="dzName" required="" className="form-control" placeholder="First Name" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-700">Last Name *</label>
                                            <input name="dzName" required="" className="form-control" placeholder="Last Name" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-700">E-MAIL *</label>
                                            <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-700">PASSWORD *</label>
                                            <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
                                        </div>
                                        <div className="text-left">
                                            <button className="site-button button-lg radius-no outline outline-2">CREATE</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;