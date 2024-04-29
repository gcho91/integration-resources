function Card(props) {
  return (
    <div className="card" key={props.name}>
      <a href={props.url} target="_blank" rel="noreferrer">
        {/* todo: react link to info page */}
        <img
          src={
            props.imgUrl ||
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt=""
          style={{ width: "100%", objectFit: "cover" }}
          className="card-img"
        />
      </a>
      <div className="text-box">
        <h2 className="text-box__event-name">{props.eventName}</h2>
        <p>Host: {props.hostName || props.name}</p>
        <p>Date: {props.date || props.frequency}</p>
        <p>Location: {props.location}</p>
        <p>Cost: {props.cost}</p>
      </div>
    </div>
  );
}
export default Card;
