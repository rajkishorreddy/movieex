import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import "./scss/App.scss";
import Main from "./Main";
import MovieMain from "./movies/MovieMain";
import ScrollToTop from "../ScrollToTop";
const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/movies" component={MovieMain} />
          </Switch>
        </ScrollToTop>
      </Router>
    </React.Fragment>
  );
};
export default App;
