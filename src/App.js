// import "./App.css";
import style from "./App.module.css";
import { Link, Route, Routes } from "react-router-dom";

import MainListing from "./MainListing";
import EventsView from "./EventsView";
import Navbar from "./components/Navbar/Navbar";
import OtherResources from "./OtherResources";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className={style.App}>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainListing />} />
        <Route path="/resources" element={<OtherResources />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/org/:id" element={<EventsView />} />
      </Routes>
      {/* <h1>Psychedelics and Plant Medicine Integration Groups</h1>
      <p>Resources for Harm Reduction</p> */}
    </div>
  );
}

export default App;

// testing that im using react correctly - behavioral
// unit testing
// ex. what happens if the serv returning the array doesnt return anything?
