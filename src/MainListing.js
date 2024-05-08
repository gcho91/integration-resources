import OtherResources from "./OtherResources";
import Card from "./Card";
import style from "./MainListing.module.css";
import listings from "./listings.json";
function MainListing() {
  return (
    <div>
      <h1>Group View</h1>
      <div className={style.row}>
        {listings.map((item) => {
          return <Card {...item} />;
        })}{" "}
      </div>

      <OtherResources />
    </div>
  );
}

export default MainListing;