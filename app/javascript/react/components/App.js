import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountriesIndexContainer from "./Countries/CountriesIndexContainer";
import CountryShowContainer from "./Countries/Country/CountryShowContainer";

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CountriesIndexContainer} />
        <Route exact path="/countries/:slug" component={CountryShowContainer} />
      </Switch>
    </Router>
  );
};

export default App;
