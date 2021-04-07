import { combineReducers } from "redux";
import {
  nowPlayingMovieReducer,
  TopRatedMovieReducer,
  GenreListReducer,
  PopularTvReducer,
  TopRatedTvReducer,
  TrendingPeopleReducer,
  PopularMovieReducer,
  upCommingMovieReducer,
} from "./fetchingReducer";
export default combineReducers({
  nowPlayingMovies: nowPlayingMovieReducer,
  TopRatedMovies: TopRatedMovieReducer,
  popularMovies: PopularMovieReducer,
  genreList: GenreListReducer,
  PopularTv: PopularTvReducer,
  topRatedTv: TopRatedTvReducer,
  trendingPeople: TrendingPeopleReducer,
  upCommingMovie: upCommingMovieReducer,
});
