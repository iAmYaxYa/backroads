import React from "react";

const PageLink = ({ pageLink, myClass }) => {
  return (
    <li>
      <a href={pageLink?.href} className={myClass}>
        {pageLink?.text}
      </a>
    </li>
  );
};

export default PageLink;
