import { combineReducers } from "redux";
import {
  nowPlayingMovieReducer,
  TopRatedMovieReducer,
  GenreListReducer,
  PopularTvReducer,
  TopRatedTvReducer,
  TrendingPeopleReducer,
} from "./fetchingReducer";
export default combineReducers({
  nowPlayingMovies: nowPlayingMovieReducer,
  TopRatedMovies: TopRatedMovieReducer,
  genreList: GenreListReducer,
  PopularTv: PopularTvReducer,
  topRatedTv: TopRatedTvReducer,
  trendingPeople: TrendingPeopleReducer,
});
