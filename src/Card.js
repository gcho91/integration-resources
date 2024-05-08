import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card(props) {
  return (
    <div className={style.card}>
      <a href={props.url} target="_blank" rel="noreferrer">
        {/* todo: react link to info page */}
        <img
          src={
            props.imgUrl ||
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt=""
          style={{ width: "100%", objectFit: "cover" }}
          className={style["card-img"]}
        />
      </a>
      <div className={style["text-box"]}>
        {/* <h2 className={style["title-text"]}>{props.hostName}</h2> */}
        {/* click on host name -> go to org page */}
        <Link to={`/org/${props.id}`}>
          <h2 className={style["title-text"]}>{props.hostName}</h2>
        </Link>
        <p className={style.description}>{props.description}</p>
        <p>Frequency: {props.date || props.frequency}</p>
        <p>Location: {props.location}</p>
        <p>Cost: {props.cost}</p>
      </div>
    </div>
  );
}
export default Card;
