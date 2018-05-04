import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-tippy/dist/tippy.css';
import {
  Tooltip,
} from 'react-tippy';





var main = (
  <div>
    <div className="menu pt-4">
      <div className="menuItem cpu"><a href="https://www.amazon.com/gp/product/B0741DN383/ref=ox_sc_act_title_3?smid=ATVPDKIKX0DER&psc=1">CPU:<span>R3 1200</span></a></div>
      <hr className="hr-1"/>
      <div className="menuItem gpu "><a href="https://www.amazon.com/dp/B01MCU1ERO/ref=sxts_sxwds-puwylo_rv_2?pf_rd_m=ATVPDKIKX0DER&pf_rd_p=3534076942&pd_rd_wg=mWL6y&pf_rd_r=XVEYKRKKN0ZC2VM0QKW4&pf_rd_s=desktop-sx-top-slot&pf_rd_t=301&pd_rd_i=B01MCU1ERO&pd_rd_w=IlD5m&pf_rd_i=gtx+1050+ti&pd_rd_r=94b5c2bb-6d5a-4411-934e-190330debbbc&ie=UTF8&qid=1525190751&sr=2">GPU:<span >GTX 1050TI</span></a></div>
      <hr className="hr-1"/>
      <div className="menuItem mobo"><a href="https://www.amazon.com/gp/product/B06XS53VR5/ref=ox_sc_act_title_5?smid=ATVPDKIKX0DER&psc=1">MOBO:<span >B350M</span></a></div>
      <hr className="hr-1"/>
      <div className="menuItem psu"><a href="https://www.amazon.com/gp/product/B00H33SFJU/ref=ox_sc_act_title_6?smid=ATVPDKIKX0DER&psc=1">PSU:<span>EVGA</span></a></div>
      <hr className="hr-1"/>
      <div className="menuItem case"><a href="https://www.amazon.com/ROSEWILL-Micro-Computer-plastic-computer/dp/B00ZPWOA6I/ref=sr_1_6?s=electronics&ie=UTF8&qid=1525200139&sr=1-6&keywords=rosewill+atx">CASE:<span>ROSEWILL ATX</span></a></div>
      <hr className="hr-1"/>
      <div className="menuItem psu"><a href="https://www.amazon.com/gp/product/B01AG9F0G8/ref=ox_sc_act_title_3?smid=ATVPDKIKX0DER&psc=1">RAM:<span>8GB DDR4</span></a></div>
      <hr className="hr-1"/>
      <div className="menuItem psu"><a href="https://www.amazon.com/gp/product/B01AG9F0G8/ref=ox_sc_act_title_3?smid=ATVPDKIKX0DER&psc=1">OS:<span>Windows 10</span></a></div>
    </div>
    <div>
      <h1 className="main-title">Specs</h1>
      <h1 className="main-title">Built</h1>
      <h1 className="main-title">From</h1>
      <h1 className="main-title">Scratch</h1>
    </div>
  </div>
);

var appRoot = document.getElementById('root');
ReactDOM.render(main, appRoot);