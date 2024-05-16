import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.container}>
      <div className={style.innerContainer}>
        <p className={style.navLogo}>Integration Finder</p>
        <ul className={style.navList}>
          <Link to="/" className={style.link}>
            Main Listings
          </Link>
          <Link to="/resources" className={style.link}>
            Resources
          </Link>
          <Link to="/feed" className={style.link}>
            Events Feed
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
