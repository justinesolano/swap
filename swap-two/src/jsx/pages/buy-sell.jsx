import React, { } from 'react';
//  import { Link } from 'react-router-dom';
import { Accordion, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';

// import Popup from '../element/popup';



function BuySell() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">Swap</h4>
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
                                                                class="btn btn-success btn-block px-5">Confirm Swap
                                                            </button>
                                                        </div>
                                                    </div>


                                                </form>
                                            </div>
                                        </div>
                                    </div>
                            <p className="p-4">Note: Please check the transaction summary to make sure all of the detail are correct before you confirm your swap. </p>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="buyer-seller">
                                        <h4>Transaction Summary</h4>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td><span>You are swapping</span></td>
                                                        <td><span><span class="cc ETH-alt"></span> 0.00254 ETH</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>For</td>
                                                        <td><img class="mx-1" src={require('./../../images/logo.png')} alt="" width="15" /> 1,259.88 JUICY</td>
                                                    </tr>
                                                   
                                                    <tr>
                                                        <td>Fee</td>
                                                        <td>$28.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td>$854.00 USD</td>
                                                    </tr>
                                              
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-xxl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">FAQ</h4>
                                </div>
                                <div className="card-body">

                                    <Accordion defaultActiveKey="0" id="accordion-faq" className="accordion">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                <h5>Can i cancel my transaction?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>If your transaction is pending you may be able to cancel it. Click here to submit a request</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                <h5>My swap is not going through?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>If the price of the token that you are trying to buy is very volitile you may need to change your slippage by going to the settings tab.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                                <h5>Why is my transaction pending?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>If you send a transaction with a low fee sometimes your transaction can get stuck on the network. To avoid this you can send a higher fee to give your transaction higher priority.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default BuySell;