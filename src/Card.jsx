function Card(props) {
    return (
        <div className="column">


            <img className="photo" src={props.image} alt="staff" width="400px" height="400px" />
            <h3> {props.name} </h3>
            <p> {props.position}</p>
            <div className="icon">
                <img className="star" src="./star.png" width="20px" height="20px" />
                <p> {props.ratings}</p>
                <p className="author"> {props.author}</p>
            </div>
        </div>
    )
}
export default Card