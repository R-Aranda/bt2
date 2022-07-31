import React from "react";
import { Link } from "react-router-dom";
import "./CountriesIndexContainer.scss";

const CountryItem = ({ attributes }) => {
  return (
    <div className="callout primary medium">
      <div className="country-header">{attributes.name}</div>
      <Link to={`/countries/${attributes.slug}`}>View Country</Link>
    </div>
  );
};

export default CountryItem;
