import { combineReducers } from "redux";
import {
  nowPlayingMovieReducer,
  TopRatedMovieReducer,
  GenreListReducer,
  PopularTvReducer,
  TopRatedTvReducer,
} from "./fetchingReducer";
export default combineReducers({
  nowPlayingMovies: nowPlayingMovieReducer,
  TopRatedMovies: TopRatedMovieReducer,
  genreList: GenreListReducer,
  PopularTv: PopularTvReducer,
  topRated: TopRatedTvReducer,
});
