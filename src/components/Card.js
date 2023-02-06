import "../assets/style/card.css"


function Card(props){
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.imgName} alt={props.alt}/>
            </div>
            <div className="card-text">
                <div className="card-name">
                    <h3>{props.title}</h3>
                    <p>{props.price}</p>
                </div>
                <div className="item-desc">
                    <p>{props.itemDesc}</p>
                </div>
                <div className="order">
                    <p>Order a delivery</p>
                </div>
            </div>
        </div>
    );
}

export default Card;