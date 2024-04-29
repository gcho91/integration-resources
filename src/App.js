import "./App.css";
import OtherResources from "./OtherResources";
import Card from "./Card";

let listings = [
  {
    hostName: "Psychedelic Society SF",
    url: "https://psychedelicsocietysf.org/events/",
    eventName: "Psychedelic Integration Circle - 6PM-8PM PST ",
    location: "Online",
    frequency: "First Tuesdays of Every Month",
    cost: "free/donation-based, suggested $10",
    imgUrl: "https://psychedelicsocietysf.org/files/Integration-Circle-FB.jpg",
  },
  {
    hostName: "Tam Integration",
    url: "https://tamintegration.com/psychedelic-integration/",
    eventName:
      "Psychedelic Integration Circles - Wednesdays 6PM/9PM EST, and more for various groups",
    location: "Online/Zoom",
    frequency: "main group - Wednesdays 6PM/9PM EST",
    cost: "free/donation-based",
    imgUrl:
      "https://tamintegration.com/wp-content/uploads/2023/01/art-integration-circle.png",
  },
  {
    hostName: "PsiloHealth",
    url: "https://www.psilohealth.co/integration",
    eventName:
      "Women’s Integration, Creative Expressions and Poetry, Breathwork ",
    location: "Online/Zoom",
    frequency: "varies - check website",
    cost: "free",
    imgUrl:
      "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/327ffc6b-f4c3-45f7-b90f-03fb85c5311f/Integration-Workshop-2-.png",
  },
  {
    name: "item name 4",
  },
  {
    name: "item name 5",
  },
  {
    name: "item name 6",
  },
];
function App() {
  return (
    <div className="App">
      <h1>Psychedelics and Plant Medicine Integration Groups</h1>
      <p>Resources for Harm Reduction</p>

      <div className="row">
        {listings.map((item) => {
          return <Card {...item} />;
        })}{" "}
      </div>

      <div style={{ display: "none" }} className="row">
        {listings.map((item) => {
          return (
            <div className="card" key={item.name}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {/* todo: react link to info page */}
                <img
                  src={
                    item.imgUrl ||
                    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
                  }
                  alt=""
                  style={{ width: "100%", objectFit: "cover" }}
                  className="card-img"
                />
              </a>
              <div className="text-box">
                <h2 className="text-box__event-name">{item.eventName}</h2>
                <p>Host: {item.hostName || item.name}</p>
                <p>Date: {item.date || item.frequency}</p>
                <p>Location: {item.location}</p>
                <p>Cost: {item.cost}</p>
              </div>
            </div>
          );
        })}
      </div>
      <OtherResources />
    </div>
  );
}

export default App;
