import React from "react";

const CountryHeader = ({ attributes, posts }) => {
  const name = attributes.name;

  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default CountryHeader;
