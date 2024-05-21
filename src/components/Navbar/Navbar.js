import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.container}>
      <div className={style.innerContainer}>
        <Link to="/" className={style.navLogoLink}>
          <p className={style.navLogo}>Integration Finder</p>
        </Link>
        <ul className={style.navList}>
          <Link to="/" className={style.link}>
            Organizations
          </Link>
          <Link to="/feed" className={style.link}>
            Events Feed
          </Link>
          <Link to="/resources" className={style.link}>
            Resources
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
