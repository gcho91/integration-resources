import { useState, useEffect } from "react";

import style from "./Feed.module.css";

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
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        let eventsData = await fetchData();
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
        {events.map((item) => {
          return (
            <div className={style.eventContainer}>
              <img src={item.imgUrl} className={style.img} alt="" />

              <div className={style.textBox}>
                <h1>{item.name}</h1>
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
