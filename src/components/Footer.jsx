import React from "react";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      {/* page links  */}
      <PageLinks parentClass={"footer-links"} childClass={"footer-link"} />
      {/* social links  */}
      <SocialLinks parentClass={"footer-icons"} childClass={"footer-icon"} />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
