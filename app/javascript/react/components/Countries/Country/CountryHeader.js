import React from "react";

const CountryHeader = ({ attributes, posts }) => {
  const name = attributes.name;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default CountryHeader;
