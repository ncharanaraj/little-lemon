import "../assets/style/homepage.css"
import Description from "../components/Description";
import About from "./About";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function HomePage() {
    return (
        <>
            <div className="hero-wrapper">
                <Description bio="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
            </div>
            <Specials />
            <div className="testimonial">
                <Testimonials />
            </div>
            <section className="about" >
                <About desc="Little lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features locally sourced menu with daily specials." />
            </section>
        </>
    );
}

export default HomePage;