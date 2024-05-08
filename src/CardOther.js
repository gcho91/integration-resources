import style from "./CardOther.module.css";
function CardOther(props) {
  return (
    <div className={style.card} key={props.name}>
      <a href={props.linkUrl} target="_blank" rel="noreferrer">
        <img
          src={
            props.imageUrl ||
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt=""
          style={{ width: "100%", objectFit: "cover" }}
          className={style["card-img"]}
        />
      </a>
      <div className={style["text-box"]}>
        <h2 className={style["text-box__org-name"]}> {props.orgName}</h2>
        <p>Date: {props.description}</p>
      </div>
    </div>
  );
}
export default CardOther;
