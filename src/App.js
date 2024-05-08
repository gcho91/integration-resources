// import "./App.css";
import style from "./App.module.css";
import { Link, Route, Routes } from "react-router-dom";

import MainListing from "./MainListing";

function App() {
  return (
    <div className={style.App}>
      <ul>
        <li>
          <Link to="/mainlistings">Main Listings</Link>
        </li>
      </ul>

      <div class={style.test}>
        <div className="item">hi</div>
        <div className="item">hi</div>
        <div className="item">hi</div>
      </div>
      <Routes>
        <Route path="/" element={<MainListing />} />
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
