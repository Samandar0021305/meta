import "./footer.css";
import Meta from "../../img/IMAGE (10).png";

function Footer(){
    return(
        <footer className="footer">
            <div className="container ">
                <ul className="footer__list">
                    <li className="footer__item">
                        <img src={Meta} alt="" />
                        <p>2022 All rights reserved</p>
                    </li>
                    <li className="footer__item">
                        <p>Wave NFTs</p>
                        <p>Stories</p>
                        <p>Contact</p>
                    </li>
                    <li className="footer__item">
                        <p>Licencing</p>
                        <p>Style Guide</p>
                        <p>Changelog</p>
                    </li>
                    <li className="footer__item">
                        <p>Powered by  Webflow</p>
                        <p>Developed by Anastasiia G.</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer