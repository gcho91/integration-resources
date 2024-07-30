import { useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
// import HamburgerIcon from "./burger-menu.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log("handle togg", isOpen);
    setIsOpen(!isOpen);
  };

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
        <div className={style.hamburgerIcon} onClick={handleToggle}>
          <svg viewBox="0 0 100 80" width="30" height="30" fill="white">
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
          </svg>
        </div>
        <div
          className={`${style.navLinks} ${isOpen ? style.navLinksActive : ""}`}
        >
          <div>item1</div>
          <div>item 2</div>
          <div>item 3</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
