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
  boxOfficeMovieReducer,
  TrendingMovieReducer,
  GenreMovieReducer,
  SearchedMovieReducer,
  FullMovieReducer,
  MovieExtIdsReducer,
  MovieCastReducer,
  MovieCrewReducer,
  MovieReviewReducer,
} from "./fetchingReducer";
export default combineReducers({
  nowPlayingMovies: nowPlayingMovieReducer,
  TopRatedMovies: TopRatedMovieReducer,
  popularMovies: PopularMovieReducer,
  boxOfficeMovie: boxOfficeMovieReducer,
  trendingMovie: TrendingMovieReducer,
  genreList: GenreListReducer,
  PopularTv: PopularTvReducer,
  topRatedTv: TopRatedTvReducer,
  trendingPeople: TrendingPeopleReducer,
  upCommingMovie: upCommingMovieReducer,
  genreMovies: GenreMovieReducer,
  fullMovieDetails: FullMovieReducer,
  searchedMovies: SearchedMovieReducer,
  movieExtIds: MovieExtIdsReducer,
  movieCast: MovieCastReducer,
  movieCrew: MovieCrewReducer,
  movieReview: MovieReviewReducer,
});
