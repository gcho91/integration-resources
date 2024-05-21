import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import listings from "../../listings.json";

function EventInfo() {
  const { eventId } = useParams();

  const eventInfo = useMemo(() => {
    for (let listing of listings) {
      const event = listing.events.find((event) => event.eventId === eventId);
      if (event) {
        return {
          ...event,
          hostName: listing.hostName,
          description: listing.description,
          url: listing.url,
          eventName: listing.eventName,
          location: listing.location,
          frequency: listing.frequency,
          cost: listing.cost,
          imgUrl: listing.imgUrl,
        };
      }
    }
    return null;
  }, [eventId]);

  useEffect(() => {
    console.log("eventId", eventId);
  }, [eventId]);

  useEffect(() => {}, [eventInfo]);
  console.log("eventInfo", eventInfo);
  if (!eventInfo) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h1>Event Info page</h1>
      <h2>Event Id: {eventInfo.eventId}</h2>
      <h2>{eventInfo.hostName}</h2>
      <p>{eventInfo.eventName}</p>
      <p>{eventInfo.description}</p>
      <img src={eventInfo.imgUrl} alt="" width={300} />
    </div>
  );
}
export default EventInfo;

// receives event info
// navigates to feed/events/:eventId url
// pulls info from associated eventId
