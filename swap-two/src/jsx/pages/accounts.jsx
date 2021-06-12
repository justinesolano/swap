import React, { } from 'react';
//  import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';




function Accounts() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                       
                        <div className="col-xl-12">
                             <div class="card acc_balance">
                                        <div class="card-header">
                                            <h4 class="card-title">Wallet  </h4>
                                            <small class="float-right"><b>Account 1: </b>  0xB57...Abf2</small>
                                        </div>
                                        <div class="card-body">
                                            <span>Assets</span>
                                            <hr></hr>
                                             <div class="d-flex justify-content-between my-4">
                                                <div>
                                                <h5 class="pb-0 mb-0"><i class="pr-2"><img src={require('../../images/juicy-icon.svg')} height="16px" alt=""/></i><span class="">1,299,852,892.0230145 JUICY</span></h5>
                                                <small class="mb-4 pl-4">$57,888.12</small>
                                                </div>
                                                <div>
                                                <img src={require('../../images/chart/4.svg')} width="150px" alt=""/>
                                                </div>
                                            </div>
                                             
                                             <hr></hr>
                                              <div class="d-flex justify-content-between my-4">
                                                <div>
                                                    <h5 class="pb-0 mb-0"><i class="cc ETH-alt pr-2"></i>5.125 ETH</h5>
                                                    <small class="mb-4 pl-4">$12,698.27</small>
                                                </div>
                                                <div>
                                                <img src={require('../../images/chart/3.svg')} width="150px" alt=""/>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div class="d-flex justify-content-between my-4">
                                                <div>
                                                    <h5 class="pb-0 mb-0"><i class="cc USDT pr-2"></i>1,787.59 USDT</h5>
                                                    <small class="mb-4 pl-4">$1,641.92</small>
                                                </div>
                                                <div>
                                                <img src={require('../../images/chart/1.svg')} width="150px" alt=""/>
                                                </div>
                                            </div>
                                            <hr></hr>
                                         
                                             <div>
                                             <button class="btn btn-primary btn-block">More Assets</button>
                                             </div>
                                             <hr></hr>


                                                    
                                            <h5 class="mb-1">Total</h5>
                                            <div class="d-flex justify-content-between my-4">
                                                <div>
                                                    <h4>32.0215485 ETH </h4>
                                                </div>
                                                 <div>
                                                    <h5> ~ $72,498.85</h5>
                                                    
                                                </div>
                                       
                                            </div>

                                         
                                        </div>
                                    </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="card-title">All Activities</h4>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="transaction-table">
                                        <div className="table-responsive">
                                            <table className="table mb-0 table-responsive-sm">
                                                <tbody>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>

                                                        <td>
                                                            <span className="badge badge-danger">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc ETH-alt"></i> ETH
                                                    </td>
                                                        <td>
                                                            Tx: 0x32...45783
                                                    </td>
                                                        <td className="text-danger">-0.000242 ETH</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success">Buy</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc DOGE"></i> DOGE
                                                    </td>
                                                        <td>
                                                             Tx: 0x32...45783
                                                    </td>
                                                        <td className="text-success">-0.000242 ETH</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-danger">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc ADA"></i> ADA
                                                    </td>
                                                        <td>
                                                            Tx: 0x32...45783
                                                    </td>
                                                        <td className="text-danger">-0.000242 ETH</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success">Buy</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc JUICY-sm"></i> JUICY
                                                    </td>
                                                        <td>
                                                             Tx: 0x32...45783
                                                    </td>
                                                        <td className="text-success">-0.000242 ETH</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-danger">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc ETH-alt"></i> ETH
                                                    </td>
                                                        <td>
                                                             Tx: 0x32...45783
                                                    </td>
                                                        <td className="text-danger">-0.000242 ETH</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Accounts;