import { useState } from "react";
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setToggle(!toggle)}
            id="nav-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* page links  */}
        <PageLinks
          parentClass={toggle ? "nav-links show-links" : "nav-links"}
          childClass={"nav-link"}
        />
        {/* social links  */}
        <SocialLinks parentClass={"nav-icons"} childClass={"nav-icon"} />
      </div>
    </nav>
  );
};

export default Navbar;
