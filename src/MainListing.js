import OtherResources from "./OtherResources";
import Card from "./Card";
import style from "./MainListing.module.css";
import listings from "./listings.json";
import EventsView from "./EventsView";
import { Link } from "react-router-dom";

import useQuery from "./hooks/useQuery";

function MainListing() {
  let query = useQuery();

  return (
    <div>
      <h1>Group View</h1>
      <div className={style.row}>
        {listings.map((item) => {
          return <Card {...item} />;
        })}{" "}
      </div>
      <Link to="/name=test">Test</Link>

      {/* <EventsView name={query.get("name")}></EventsView> */}
      <OtherResources />
    </div>
  );
}

export default MainListing;
