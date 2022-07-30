import "./hedaer.css";

import Img from "../../img/IMAGE (11).png";


function Header(){
    return(
        <header className="header">
            <div className="container">
                <ul>
                    <li>
                        <h2>META RECORD LABEl</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <button className="header_btn">Learn more</button>
                    </li>
                    <li>
                        <img src={Img} alt="" />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;