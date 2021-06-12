import React, { useState } from 'react';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import { Tab, Tabs } from 'react-bootstrap';
// import Wallet from './wallet';

import BtcChart from '../charts/btc';
import LtcChart from '../charts/ltc';
import XrpChart from '../charts/xrp';
import AreaChart from '../charts/area';
// import RadialChart from '../charts/radial';



function Dashboard() {
  
  const [key, setKey] = useState('wallet');

    return (
        <>
            <Header2 />
            <Sidebar />

            <div class="content-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-9 col-xxl-12">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row">
                                         <div class="col-xl-12">
                                         <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="wallet" title="Wallet">
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
      </Tab>
      <Tab eventKey="profile" title="Wallet Two">
      <div class="card acc_balance">
                                        <div class="card-header">
                                            <h4 class="card-title">Wallet Two </h4>
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
      </Tab>
    </Tabs>



                                </div>

                            </div>

                        </div>
                                       
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">Quick Swap</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="buy-sell-widget">
                                                <form method="post" name="myform" class="currency_validate form-row">
                                                    <div class="form-group col-xl-12 mb-0">
                                                        <label class="mr-sm-2">Currency</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text"> <span id="swapIcon"></span> </label>
                                                            </div>
                                                            <select id="swap"  class="form-control"> 
                                                            <option data-balance="" data-eth-balance="" value="cc" data-subtext="petrifications">Select</option>
                                                                <option data-balance="57,888.12" data-eth-balance="25.8581" value="cc JUICY" data-subtext="petrifications">JUICY</option>
                                                               
                                                                <option data-balance="12,698.27" data-eth-balance="5.125" value="cc ETH-alt" data-subtext="petrifications">ETH</option>
                                                                <option data-balance="1,787.59" data-eth-balance="0.76" value="cc USDT" data-subtext="petrifications">USDT</option>
                                                                <option data-balance="" data-eth-balance="" value="cc 1INCH" data-subtext="petrifications">1INCH</option>
                                                                                                                            
                                                            </select>
                                                           
                                                        </div>
                                                        <div class="d-flex justify-content-between">
                                                        <div><p>Balance: <span id="eth-balance">0</span> ETH</p></div>
                                                        <div>~$<span id="balance" class="float-right">0.00</span></div>
                                                           
                                                         </div>
                                                    </div>

                                                    <div class="form-group col-xl-12 mb-0">
                                                         <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text"><span
                                                                    id="swapIconTo"></span></label>
                                                            </div>
                                                           <select id="swapTo"  class="form-control"> 
                                                            <option data-balance="" data-eth-balance="" value="cc" data-subtext="petrifications">Select</option>
                                                                <option data-balance="57,888.12" data-eth-balance="25.8581" value="cc JUICY" data-subtext="petrifications">JUICY</option>
                                                               
                                                                <option data-balance="12,698.27" data-eth-balance="5.125" value="cc ETH-alt" data-subtext="petrifications">ETH</option>
                                                                <option data-balance="1,787.59" data-eth-balance="0.76" value="cc USDT" data-subtext="petrifications">USDT</option>
                                                                <option data-balance="" data-eth-balance="" value="cc 1INCH" data-subtext="petrifications">1INCH</option>
                                                                                                                            
                                                            </select>
                                                            
                                                        </div>
                                                        <p>Balance: 0.00 ETH <span class="float-right">~$0.00</span> </p>
                                                    </div>

                                                    <div class="form-group col-xl-12 mb-0">
                                                        <label class="mr-sm-2">Enter your amount</label>
                                                        <div class="input-group">
                                                            <input type="text" name="currency_amount" class="form-control"
                                                                placeholder="0.000 ETH" />
                                                            <input type="text" name="usd_amount" class="form-control"
                                                                placeholder="0.00 USD" />
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="d-flex justify-content-between align-items-center my-3">
                                                            
                                                            <button type="submit" name="submit"
                                                                class="btn btn-success btn-block px-5">Exchange
                                                            Now</button>
                                                        </div>
                                                    </div>


                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card profile_chart transparent">
                                        <div class="card-header">
                                            <div class="chart_current_data">
                                                <h3>$JUICY <small class="mute">(Juicy)</small></h3>
                                                <p class="text-success">125648 <span>USD (20%)</span></p>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <AreaChart />
                                            <div class="chart-content text-center mt-3">
                                                <div class="row">
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">24hr Volume</p>
                                                            <strong>$1236548.325</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Market Cap</p>
                                                            <strong>19B USD</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Circulating</p>
                                                            <strong>29.4M BTC</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">All Time High</p>
                                                            <strong>19.783.06 USD</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Typical hold </p>
                                                            <strong>88 days</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Trading activity </p>
                                                            <strong>70% buy </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-xxl-12">
                            <div class="row">
                                 <div class="col-xl-12 col-lg-12">
                                            <div class="widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <span><i class="cc BTC-alt"></i></span>
                                                            <h5 class="d-inline-block ml-2 mb-3">Juicy
                                                            <span> (24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1254.36 <span class="badge badge-success ml-2">+
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <BtcChart/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12">
                                            <div class="widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <span><i class="cc ETH-alt"></i></span>
                                                            <h5 class="d-inline-block ml-2 mb-3">Ethereum
                                                            <span> (24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1254.36 <span class="badge badge-danger ml-2">-
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <LtcChart/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12">
                                            <div class="widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <span><i class="cc BTC-alt"></i></span>
                                                            <h5 class="d-inline-block ml-2 mb-3">Bitcoin
                                                            <span> (24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1,254.36 <span class="badge badge-primary ml-2">
                                                            06%</span>
                                                        </h4>

                                                    </div>
                                                    <XrpChart/>
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

export default Dashboard;