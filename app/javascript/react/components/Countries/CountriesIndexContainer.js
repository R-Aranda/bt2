import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import CountryItem from "./CountryItem";
import "./CountriesIndexContainer.scss";

const CountriesIndexContainer = (props) => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch("/api/v1/countries");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const countryData = await response.json();

      console.log("countryData:", countryData);
      setCountries(countryData.data);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [countries.length]);

  const grid = countries.map((item) => {
    return <CountryItem key={item.id} attributes={item.attributes} />;
  });

  return (
    <div className="grid-x grid-padding-x align-center">
      <div className="cell small-8 medium-8 large-8 text-center ">
        <h2>All Countries</h2>
        <div>{grid}</div>
      </div>
    </div>
  );
};

export default CountriesIndexContainer;
