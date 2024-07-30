import style from "../Feed/Feed3.module.css";
function Feed3() {
  return (
    <div className={style.container}>
      <Feed3Card
        eventName="Tam Integration Long title integration circle meeting"
        hostName="Tam Integration"
        date="TODAY"
        time="17:00 PST"
        description="Psychedelic integration circles can be a remarkable space to meet with
          like-minded people. We all bring a a aaa"
      />
      <Feed3Card
        eventName="Shorter one line title"
        hostName="Fireside Chat"
        date="10/3"
        time="5:00 PST"
        description="some descriptive lines"
      />
    </div>
  );
}

function Feed3Card(props) {
  return (
    <div className={style.cardContainer}>
      <div className={style.dateContainer}>
        <p className={style.date}>{props.date}</p>
        <h3 className={style.time}> {props.time}</h3>
      </div>
      <div className={style.mainText}>
        <h2> {props.eventName}</h2>
        <p className={style.hostName}>{props.hostName}</p>
        <p className={style.description}>{props.description}</p>
      </div>
      <div className={style.right}>
        <button className={style.cta}>+ More Info</button>
      </div>
      <div></div>
    </div>
  );
}
export default Feed3;
