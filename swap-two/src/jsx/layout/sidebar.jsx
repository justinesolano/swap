import React, { } from 'react';
import { Link } from 'react-router-dom';



function Sidebar() {

    return (
        <>
            <div className="sidebar">
                <Link class="juicy-logo" to={"/"}>
                    <img src={require('../../images/logo.png')} alt="" />
                </Link>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={"/"} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i class="icofont-ui-home"></i></span>
                            </Link>
                        </li>
                        <li><Link to={"/buy-sell"} data-toggle="tooltip" data-placement="right" title="Swap">
                            <span><i class="icofont-exchange"></i></span>
                        </Link>
                        </li>
                        <li><Link to={"/accounts"} data-toggle="tooltip" data-placement="right" title="Wallets">
                            <span><i class="icofont-wallet"></i></span>
                        </Link>
                        </li>
                        <li><Link to={"/settings"} data-toggle="tooltip" data-placement="right" title="Rewards">
                            <span><i class="icofont-gift"></i></span>
                        </Link>
                        </li>
                       
                    </ul>
                    <div class="copyright">
                        © Juicy
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;