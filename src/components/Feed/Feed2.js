import FeedList from "../FeedList/FeedList";
// import style from "./Feed2.module.css";

// function Feed2() {
//   return (
//     <div className={style.feedContainer}>
//       {/* <h1>Feed 2</h1> */}
//       <div className={style.feedGridContainer}>
//         <EventBox />
//         <EventBox />
//         <EventBox />
//       </div>
//     </div>
//   );
// }

function Feed2() {
  return <FeedList />;
}
// function EventBox() {
//   return (
//     <div
//       style={{
//         textAlign: "left",
//         border: "solid 1px black",
//         borderRadius: "10px",
//         width: "300px",
//       }}
//     >
//       <img
//         src="https://placehold.co/600x400"
//         style={{
//           width: "100%",
//           objectFit: "cover",
//           borderRadius: "10px",
//         }}
//       ></img>

//       <div className={style.textBox}>
//         <h2 style={{ fontSize: 16 }}>
//           Event Title - Weekly Psilocybin and Psychedelics Online Integration
//           Circle
//         </h2>
//         <p style={{ margin: 0 }}>subtitle with group name</p>
//         <div className={style.dateAndTimeInfo}></div>
//         <div className={style.locationInfo}></div>
//       </div>
//     </div>
//   );
// }

export default Feed2;
