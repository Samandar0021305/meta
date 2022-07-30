import "./Navbar.css";

import logo from "../../img/IMAGE (10).png";

function Navbar(){
    return (
        <nav className="navbar">
            <div className="container navbar__box">
                <img src={logo} alt="" />
                <ul className="navbar__box">
                    <li>
                        <p>Wave NFTs</p>
                    </li>
                    <li>
                        <p>Stories</p>
                    </li>
                    <li>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar