import React from "react";
import PageLink from "./PageLink";
import { pageLinks } from "../data";

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks?.map((pageLink) => {
        return (
          <PageLink
            key={pageLink.id}
            pageLink={pageLink}
            myClass={childClass}
          />
        );
      })}
    </ul>
  );
};

export default PageLinks;
