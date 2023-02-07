import RestaurantFood from "../assets/images/restauranfood.jpg"
import "../assets/style/description.css"
import Button from "./Button";

function Description(props) {
    return (
        <>
           <section className="hero">
                <div className="hero-text">
                    <div>
                        <h1 >Little Lemon</h1>
                        <span>Chicago</span>
                    </div>
                    <article>{props.bio}</article>
                    <Button title="Reserve a Table"  />
                </div>
                <div className="hero-dp">
                    <img src={RestaurantFood} alt="Restaurant-Food" />
                </div>
           </section>
        </>
    );
}

export default Description;