function Card(props) {
    return (
        <div className="review-card" id={props.id}>
            <div className="review-header">
                <div className="review-rating">
                    {props.rating}
                </div>
                <button>Click</button>
            </div>
            <div className="review-body">
                <p className="review-author">
                    {props.name}</p>
                <p className="review-desc">
                    {props.desc}
                </p>
            </div>
            <p className="review-footer">Posted on <span>{props.date}</span></p>
        </div>
    )
}
export default Card;