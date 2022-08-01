import "./hero.css";

import Logo1 from "../../hero-img/hero-1.png";
import Logo2 from "../../hero-img/hero-2.png";
import Logo3 from "../../hero-img/hero-3.png";
import Logo4 from "../../hero-img/hero-4.png";
import Logo5 from "../../hero-img/hero-5.png";
import Logo6 from "../../hero-img/hero-6.png";
import Logo7 from "../../hero-img/hero-7.png";

function Hero(){
    return(
        <div className="hero">
            <div className="container">
                    <h2>Artists</h2>
              <ul className="hero__list">
                <li className="hero__item">
                    <img src={Logo1} alt="" />
                    <p>Mark Popson</p>
                </li>
                <li className="hero__item">
                    <img src={Logo2} alt="" />
                    <p>Pete Bentz</p>
                </li>
                <li className="hero__item">
                    <img src={Logo3} alt="" />
                    <p>Daniela Youth</p>
                </li>
                <li className="hero__item">
                    <img src={Logo4} alt="" />
                    <p>Roman Gore</p>
                </li>
                <li className="hero__item">
                    <img src={Logo5} alt="" />
                    <p>Tonya</p>
                </li>
                <li className="hero__item">
                    <img src={Logo6} alt="" />
                    <p>Ivor</p>
                </li>
                <li className="hero__item">
                    <img src={Logo7} alt="" />
                    <p>Ivor</p>
                </li>
                <li className="hero__item">
                    
                </li>
              </ul>
            </div>
        </div>
    )
}

export default Hero