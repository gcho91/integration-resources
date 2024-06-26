import { useParams, Link } from "react-router-dom";
import listings from "./listings.json";
import { useMemo } from "react";
import useFetch from "./hooks/useFetch";

function EventsView() {
  const { apiData, error, loading } = useFetch("/db/listings.json");
  // @ to do: remove manual importing of the listings file in src
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
      <h1>{event.hostName}</h1>
      <p>{event.description}</p>
      <div>
        {event.events.map((item) => {
          return (
            <Link key={item.eventId} to={`/feed/events/${item.eventId}`}>
              <p>{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default EventsView;
// template accepts routing with listings props data
// pull all individual events from the org routing

// pull from json
// the info that pulls up when you search json
// return only that data
