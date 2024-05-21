import Card from "./Card";
import style from "./MainListing.module.css";
import listings from "./listings.json";

function MainListing() {
  return (
    <div>
      <h1>Organizations</h1>
      <p>Organizations that regularly host online integration circles </p>
      <div className={style.row}>
        {listings.map((item, index) => {
          return <Card {...item} key={index} />;
        })}{" "}
      </div>

      {/* <OtherResources /> */}
    </div>
  );
}

export default MainListing;
