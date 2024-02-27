import imglogo from './asstes/logo.png';
import tro from './asstes/1.png';
import award from './asstes/2.png';
import products from './asstes/3.png'
import { BsFacebook } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

import './App.css'

function App() {
  return (
    <div className="App">
      <img src={imglogo} className="logopic" />

      <div className="body">
        <div className="left">
          <img src={tro} className="leftpic" />
        </div>
        <div className="right">
         
            <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
              <ul>            
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
              </ul>
            
          <img src={award} alt="" className="awardpic" />
          <p>Government of India has awarded the<b>"National Energy Conservation Award 2018"</b> . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <div className="products">
        <p className="desc">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src={products} alt="" className="productsimg" />

        <p className="values">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <span className='hr'></span>

        <div className="CRI">
          <p className="textcri">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          <p className="textchei">CHEMICALS & PROCESS<span className="pie"> | </span>POWER <span className="pie"> | </span> WATER & WASTE WATER <span className="pie"> | </span>OILS & GAS <span className="pie"> | </span>PHARMA <span className="pie"> | </span>SUGARS & DISTILLERIES<span className="pie"> | </span> PAPER & PULP<span className="pie"> | </span> MARINE & DEFENCE <span className="pie"> | </span>METAL & MINING<span className="pie"> | </span> FOOD & BEVERAGE <span className="pie"> | </span>PETROCHEMICAL & REFINERIES <span className="pie"> | </span>SOLAR <span className="pie"> | </span>BUILDING <span className="pie"> | </span>HVAC<span className="pie"> | </span> FIRE FIGHTING<span className="pie"> | </span> AGRICULTURE & RESIDENTIAL</p>
        </div>
        <div className="footer">
          <div className='f1'> &nbsp;Toll free  &nbsp;<b> 1800 200 1234</b></div>
          <div className='f1'><BsFacebook /> &nbsp;<a href="https://www.facebook.com/cripumps">www.facebook.com/cripumps</a></div>

          <div className='f1'><TbWorld />  &nbsp;<a href="https://www.crigroups.com">www.crigroups.com</a></div>

        </div>
      </div>
    </div>
  );
}

export default App;
