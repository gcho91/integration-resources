import CardOther from "./CardOther";
import style from "./OtherResources.module.css";

let resources = [
  {
    orgName: "Fireside Project",
    description:
      "Free & confidential psychedelic peer support over phone and text, staffed by rigorously trained, compassionate, supportive volunteers from diverse backgrounds who listen deeply and from a place of non-judgment. ",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd60sI-3dNR20_CV_sWho-tE1cuGCkLvXQ0Q&usqp=CAU",
    linkUrl: "https://firesideproject.org/",
  },
];

function OtherResources() {
  return (
    <div>
      <h1>Other Resources</h1>
      <div className={style.row}>
        {resources.map((item) => {
          return <CardOther {...item} />;
        })}
      </div>
    </div>
  );
}

export default OtherResources;
