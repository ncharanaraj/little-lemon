import footerLogo from '../assets/images/footer-logo.png'
import "../assets/style/footer.css"

function Footer(){
    return(
        <div className="footer-container">
            <div className="footerLogo">
                <img src={footerLogo} alt="little lemon" />
            </div>
            <div className="footer-links">
                <h5>Doormat Navigation</h5>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="footer-links">
                <h5>Contact</h5>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="footer-links">
                <h5>Social Media</h5>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;