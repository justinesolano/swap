import React, { } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, } from 'react-bootstrap'



function Header2() {

    return (
        <>
            <div className="header dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                {/* <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link> */}

                                <div class="header-search d-flex align-items-center">
                                    <Link class="brand-logo mr-3" href="index.html">
                                        <img src={require('./../../images/logo.png')} alt="" width="30" />
                                    </Link>
    <ul class="nav-2 inline">
      <li class=" active">
        <a class="" href="/chart">Chart <span class="sr-only">(current)</span></a>
      </li>
      <li class="">
        <a class="" href="#">Liquidity</a>
      </li>
      <li class="">
        <a class="" href="#">Staking</a>
      </li>
      <li class="">
        <a class=" disabled" href="#">Support</a>
      </li>
    </ul>
                                </div>

                                <div className="dashboard_log">
                                    <div className="d-flex align-items-center">
                                        <DropdownButton
                                            alignRight
                                            title="Account"
                                            className="profile_log"
                                        >
                                            <Link to={'./accounts'} className="dropdown-item">
                                                <i className="la la-user"></i> Overview
                                            </Link>
                                            <Link to={'./history'} className="dropdown-item">
                                                <i className="la la-book"></i> History
                                            </Link>
                                            <Link to={'./settings'} className="dropdown-item">
                                                <i className="la la-cog"></i> Settings
                                            </Link>
                                            <Link to={'./lock'} className="dropdown-item">
                                                <i className="la la-lock"></i> Lock
                                            </Link>
                                            <Link to={'./signin'} className="dropdown-item logout">
                                                <i className="la la-sign-out"></i> Logout
                                            </Link>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header2;