import React from "react";
import { Link } from "react-router-dom";

const CountryItem = ({ attributes }) => {
  return (
    <div>
      <div>{attributes.name}</div>
      <Link to={`/countries/${attributes.slug}`}>View Country</Link>
    </div>
  );
};

export default CountryItem;
