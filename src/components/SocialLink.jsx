import React from "react";

const SocialLink = ({ socialLink, myClass }) => {
  return (
    <li>
      <a href={socialLink?.href} target="_blank" className={myClass}>
        <i className={socialLink?.icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
