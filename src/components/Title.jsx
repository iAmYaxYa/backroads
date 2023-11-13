import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <h2>
      {title} <span>{subTitle}</span>
    </h2>
  );
};

export default Title;
