import listings from "./listings.json";

function extractData(listingsData) {
  return listingsData.flatMap((orgData) => {
    const { id: orgId, hostName: orgName, events } = orgData;
    return events.map((eventInfo) => ({
      ...eventInfo,
      orgId,
      orgName,
    }));
  });
}

function sortEventsByDescDates(events) {
  return events.sort((a, b) => new Date(b.date) - new Date(a.date));
}
const allEvents = extractData(listings);

const sortedEvents = sortEventsByDescDates(allEvents);
console.log("events data sorted", sortedEvents);
function Feed() {
  return <h1>Events Feed</h1>;
}

export default Feed;
