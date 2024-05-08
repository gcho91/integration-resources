import { useParams } from "react-router-dom";
import listings from "./listings.json";
import { useMemo } from "react";

function EventsView({}) {
  const { id } = useParams();
  const filtered = useMemo(() => {
    return listings.filter((item) => item.id.toString() === id);
  }, [id]);

  if (filtered.length === 0) {
    return <h1>No match found</h1>;
  }

  const event = filtered[0];

  return (
    <div>
      {/* <h1>ID: {id}</h1> */}
      <h1>{event.hostName}</h1>
    </div>
  );
}

export default EventsView;
// template accepts routing with listings props data
// pull all individual events from the org routing

// pull from json
// the info that pulls up when you search json
// return only that data
