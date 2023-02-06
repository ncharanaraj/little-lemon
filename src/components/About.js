import "../assets/style/about.css"
import restaurant from "../assets/images/restaurant.jpg"
import chef from "../assets/images/Mario and Adrian A.jpg"

function About(props) {
    return(
        <div className="about-container">
            <div className="about-desc">
                <div className="about-title">
                    <h1>Little Lemon</h1>
                    <span className="place">Chicago</span>
                </div>
                <div className="about-info">
                    <p>{props.desc}</p>
                </div>
            </div>
            <div className="little-lemon_pic">
                <div>
                    <img src={restaurant} alt="restaurant" />
                </div>
                <div>
                    <img src={chef} alt="chef" />
                </div>
            </div>
        </div>
    );
}

export default About;