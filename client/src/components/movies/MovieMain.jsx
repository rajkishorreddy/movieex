import React from "react";
import MovieHeader from "./MovieHeader";
import MovieSearch from "./MovieSearch";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MovieBody from "./MovieBody";
const MovieMain = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <MovieHeader />
      <Switch>
        <Route path={`${path}/genre`} component={MovieSearch} />
        <Route path={`${path}/`} component={MovieBody} />
      </Switch>
    </div>
  );
};

export default MovieMain;
