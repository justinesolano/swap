import React, { Component } from 'react';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
// import { Link } from 'react-router-dom';
// import Header3 from '../layout/header3';



class Chart extends Component {
  // constructor(props) {
  //   super(props);
  //   this.myRef = React.createRef();
  // }

  // componentDidMount() {
  //   const iframe = document.createElement('iframe');
  //   iframe.src = 'https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=145&pref_coin_id=1508'
  //   iframe.async = false;
  //   this.myRef.current.appendChild(iframe);
  // }

  

  render() {
    return(
      <>
      <Header2 />
      <Sidebar />
<div className="container" style={{marginBottom: '20px'}} >
<div style={{height: '560px', backgroundColor: '#1D2330' }}>
<div className="row" style={{ height: '540px', padding:'0px', margin: '30px 0 0 0', width: '100%' }}>
  <iframe className="col" title="chart" src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=145&pref_coin_id=1508" style={{width: '100%', height:'536px', scrolling:'auto',marginWidth:'0', marginHeight:'0', frameBorder:'0', border:'0', margin: '0', padding:'0', lineHeight:'14px' }}></iframe>
  <div style={{color: '#626B7F', lineHeight: '14px', fontWeight: '400', fontSize: '11px', padding: '2px 6px', width: '100%', fontFamily: 'Verdana, Tahoma, Arial, sans-serif'}}><a href="https://coinlib.io" target="_blank" style={{fontWeight: '500', color: '#626B7F', textDecoration: 'none', fontSize: '11px' }} rel="noreferrer">Cryptocurrency Prices</a>&nbsp;by Coinlib
</div>
</div>
</div>
<div className="row crypto-table" style={{ height: '470px', marginTop: '20px' }}>
<div style={{ height:'5979px', backgroundColor: '#1D2330', border: '1px solid #282E3B', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #262B38', padding: '0px', margin: '0px', width: '400px' }}>
<div style={{height: '5959px', padding: '0px', margin: '0px', width: '100%' }}>
<div className="table-title" style={{display: 'flex', justifyContent:'center'}} >
<h3>Crypto Prices</h3>
</div>
<iframe title="table" src='https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=100&pref_coin_id=1508&graph=no' style={{ width:'100%', height:'5955px', overflow:'auto', marginWidth:'0', marginHeight:'0', frameBorder:'0', border:'0' }}>
</iframe>
</div>
</div>
</div>
</div>
<div className="row">
</div>
</>
    );
  }
}

export default Chart;