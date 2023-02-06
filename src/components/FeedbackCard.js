import "../assets/style/feedbackCard.css"

function FeedbackCard(props){
    return(
        <>
            <div className="feedback-card_container">
                <div>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="profile-info">
                    <div>
                        <img src={props.profile} alt={props.alt} />
                    </div>
                    <div className="profileData">
                        <h4>{props.fullname}</h4>
                        <p>{props.username}</p>
                    </div>
                </div>
                <div className="feedback-comment">
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    );
}

export default FeedbackCard;