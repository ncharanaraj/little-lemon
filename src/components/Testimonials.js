import "../assets/style/testimonials.css"
import FeedbackCard from "./FeedbackCard";
import firstPerson from "../assets/images/profile1.jpg"
import secondPerson from "../assets/images/profile2.jpg"
import thirdPerson from "../assets/images/profile3.jpg"
import fourthPerson from "../assets/images/profile4.jpg"

function Testimonials(){
    return(
        <>
            <section className="testimonial-container">
                    <h2>Testimonials</h2>
                    <div className="feedback-cards">
                        <FeedbackCard
                            profile={firstPerson}
                            fullname="Sara Lopez"
                            username="sara72"
                            desc="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"
                        />
                        <FeedbackCard
                            profile={secondPerson}
                            fullname="John Doe"
                            username="Johnny_Utah"
                            desc="“We had such a great time celebrating my grandmothers bitthday!”"
                        />
                        <FeedbackCard
                            profile={thirdPerson}
                            fullname="Emily Masterson"
                            username="Master-Emily"
                            desc="“Best Feta Salad in town. Flawless everytime!”"
                        />
                        <FeedbackCard
                            profile={fourthPerson}
                            fullname="Eve John"
                            username="Eve-Pel"
                            desc="“Such a chilled out atmosphere - love it!”"
                        />
                    </div>
            </section>
        </>
    );
}

export default Testimonials;