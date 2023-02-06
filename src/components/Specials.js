import Button from "./Button";
import "../assets/style/specials.css"
import Card from "../components/Card";
import GreekSalad from "../assets/images/greek salad.jpg"
import Bruchetta from "../assets/images/bruchetta.svg"
import LemonDesert from "../assets/images/lemon dessert.jpg"

function Specials(){
    return(
        <>
            <section className="specials">
                <div className="specials-header">
                    <h2>This Week Specials!</h2>
                    <Button title="Online Menu"/>
                </div>
                <div className="cards">
                    <Card
                        imgName={GreekSalad}
                        alt="Greek Salad"
                        title="Greek Salad"
                        price="$12.99"
                        itemDesc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <Card
                        imgName={Bruchetta}
                        alt="Bruchetta"
                        title="Bruchetta"
                        price="$5.99"
                        itemDesc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    />
                    <Card
                        imgName={LemonDesert}
                        alt="Lemon Dessert"
                        title="Lemon Dessert"
                        price="$5.00"
                        itemDesc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
                </div>
            </section>
        </>
    );
}

export default Specials;