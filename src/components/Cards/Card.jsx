import {styled} from 'styled-components'
const StudentCard = styled.div`
  background-color: #8a8787;
  padding: 28px 32px;
  display: grid;
  border-radius: 10px;
  text-align: left;
`
function Card(props) {
    return (
        <StudentCard className='review-card' id={props.id}>
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
        </StudentCard>
    )
}
export default Card;
export {StudentCard}