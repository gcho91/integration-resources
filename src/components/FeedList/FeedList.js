import style from "./FeedList.module.css";
import { CiCalendar } from "react-icons/ci";

function FeedList() {
  return (
    <div className={style.container}>
      <h1>Hello feed list world</h1>

      <ListCard2 />
      {/* <ListCard /> */}
    </div>
  );
}

function ListCard() {
  return (
    <div className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img
          src="https://placehold.co/600x400"
          //   width={300}
          width={600}
          height={400}
          className={style.img}
        ></img>
      </div>

      <div className={style.cardRight}>
        <div className={style.dateTimeContainer}>
          <p>
            <CiCalendar
              color="red"
              style={{ verticalAlign: "center", marginRight: 0, marginLeft: 0 }}
            />
            April 5th, 2024 - Fri | 6:30PM PST
          </p>
        </div>
        <h2>
          Event Title - Weekly Psilocybin and Psychedelics Online Integration
          Circle
        </h2>
        <p style={style.description}>
          Psychedelic integration circles can be a remarkable space to meet with
          like-minded people. We all bring a piece of the puzzle, and...
        </p>
        <p>Location: Online - Zoom Link</p>
        <p>Cost: Free / Donation-based</p>
      </div>
    </div>
  );
}

function ListCard2() {
  return (
    <div
      className={style.cardContainer}
      style={{
        //   height: 250,
        display: "flex",
      }}
    >
      <div
        style={{
          width: "345px",
          height: "215px",
          borderRadius: "15px",
          //   background: "salmon",
          alignSelf: "center",
        }}
      >
        {/* col1 - testing content */}
        <img
          //   src="https://placehold.co/600x400"
          src="https://psychedelicsocietysf.org/files/Integration-Circle-FB.jpg"
          width={"100%"}
          height={"100%"}
          className={style.img}
          style={{
            objectFit: "cover",
            alignSelf: "center",
          }}
        ></img>
      </div>
      <div
        style={{
          background: "yellow",
        }}
      >
        {/* col2 - testing content */}

        <div className={style.dateTimeContainer} style={{ width: 500 }}>
          <p>
            <CiCalendar
              color="red"
              style={{ verticalAlign: "center", marginRight: 0, marginLeft: 0 }}
            />
            April 5th, 2024 - Fri | 6:30PM PST
          </p>
        </div>
        <h2>
          Event Title - Weekly Psilocybin and Psychedelics Online Integration
          Circle
        </h2>
        <p>
          Psychedelic integration circles can be a remarkable space to meet with
          like-minded people. We all bring a a aaa
        </p>
        <p>Location: Online - Zoom Link</p>
        <p>Cost: Free / Donation-based</p>
      </div>
    </div>
  );
}

export default FeedList;
