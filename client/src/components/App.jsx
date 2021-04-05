import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import "./scss/App.scss";
import Main from "./Main";
import MovieMain from "./movies/MovieMain";
const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/movies" exact component={MovieMain} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
