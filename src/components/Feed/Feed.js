import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Feed.module.css";
import useFetch from "../../hooks/useFetch";

// Example function to simulate fetching data from an API or JSON file
async function fetchData() {
  const response = await fetch("/db/listings.json");

  if (!response.ok) {
    throw new Error("Network response not ok", response);
  }
  const data = await response.json();
  return data;
}

function extractData(listingsData) {
  return listingsData.flatMap((orgData) => {
    const { id: orgId, hostName: orgName, imgUrl, events } = orgData;
    return events.map((eventInfo) => ({
      ...eventInfo,
      orgId,
      orgName,
      imgUrl,
    }));
  });
}

function sortEventsByDescDates(events) {
  return events.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function Feed() {
  const {
    apiData,
    loading: apiIsLoading,
    error,
  } = useFetch("/db/listings.json");
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        let eventsData = await fetchData();
        // let eventsData = apiData;
        let unsortedEvents = extractData(eventsData);
        let sortedEvents = sortEventsByDescDates(unsortedEvents);

        setEvents(sortedEvents);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  useEffect(() => {
    console.log("events", events);
  }, [events]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={style.container}>
      <h1>Events Feed</h1>
      <div>
        {events.map((item, ind) => {
          return (
            <div className={style.eventContainer} key={ind}>
              <img src={item.imgUrl} className={style.img} alt="" />

              <div className={style.textBox}>
                {/* <Link to="/feed/events">  */}
                <Link to={`/feed/events/${item.eventId}`}>
                  <h1>{item.name}</h1>
                </Link>
                <p>{item.date}</p>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feed;
