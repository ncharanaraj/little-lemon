import heroImage from "../assets/images/restauranfood.jpg"
import greekSalad from "../assets/images/greek salad.jpg"
import lemonDessert from "../assets/images/lemon dessert.jpg"
import bruchetta from "../assets/images/bruchetta.svg"

function Main(){
    return(
        <>
            <section id="hero">
                <div class="hero-container">
                    <div class="content">
                        <h1>Little Lemon</h1>
                        <p id="location">Chicago</p>
                        <p class="description">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                        <button>Reserve a Table</button>
                    </div>
                    <img src={heroImage} alt="Hero section display"/>
                </div>
            </section>
            <section id="highlight">
                <div class="highlight-title">
                    <h2>This week specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div class="highlight-cards">
                    <div>
                        <img src={greekSalad} alt="greek-salad"/>
                        <div class="card">
                            <div class="card-title">
                                <h3>Greek salad</h3>
                                <p>$12.99</p>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary.</p>
                            <div>
                                <p>Order a delivery</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={lemonDessert} alt="lemon-dessert"/>
                        <div class="card">
                            <div class="card-title">
                            <h3>Lemon Dessort</h3>
                            <p>$5.00</p>
                            </div>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <div>
                                <p>Order a delivery</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={bruchetta} alt="bruchetta"/>
                        <div class="card">
                            <div class="card-title">
                            <h3>Bruschetta</h3>
                            <p>$5.99</p>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            <div>
                                <p>Order a delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    );
}

export default Main;