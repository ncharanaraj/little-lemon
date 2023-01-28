import footerLogo from "../images/footer-logo.png"
import Nav from "./Nav";

function Footer(){
    return(
        <>
            <div>
                <img src={footerLogo} alt="footer logo" />
            </div>
            <div>
                <h4>Doormat Navigation</h4>
                <Nav />
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </>
    );
}

export default Footer;