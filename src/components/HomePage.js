import "../assets/style/homepage.css"
import Description from "../components/Description";
import Specials from "./Specials";

function HomePage() {
    return (
        <>
            <div className="hero-wrapper">
                <Description bio="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
            </div>
            <Specials />

        </>
    );
}

export default HomePage;