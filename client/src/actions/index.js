import axios from "axios";
const url = "https://api.themoviedb.org/3";
const apiKey = "2afbb0d04ed94c81cd8858e0087a74fe";
const nowPlayingMovieUrl = `${url}/movie/now_playing`;
const topRatedMoviesUrl = `${url}/movie/top_rated`;
const popularMoviesUrl = `${url}/movie/popular`;
const upcommingMovieUrl = `${url}/movie/upcoming`;
const genreUrl = `${url}/genre/movie/list`;
const PopularTvUrl = `${url}/tv/popular`;
const TopRatedTvUrl = `${url}/tv/top_rated`;
const trendingMovieUrl = `${url}/trending/movie/week`;
const trendingPersons = `${url}/trending/person/week`;
// const test = async () => {
//   const { data } = await axios.get(
//     "https://api.themoviedb.org/3/search/tv?api_key=2afbb0d04ed94c81cd8858e0087a74fe&query=sex education"
//   );
//   console.log(data);
// };
// const test = async () => {
//   const { data } = await axios.get(
//     "https://api.themoviedb.org/3/search/movie",
//     {
//       params: {
//         api_key: apiKey,
//         page: 1,
//         query: "the dark knight",
//       },
//     }
//   );
//   console.log(data);
// };
// test();
export const fetchTrendingPeople = () => {
  return async (dispatch) => {
    const { data } = await axios.get(trendingPersons, {
      params: {
        api_key: apiKey,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      id: obj.id,
      name: obj.name,
      poster: posterUrl + obj.profile_path,
    }));
    dispatch({ type: "TRENDING_PEOPLE", payload: modifiedData });
  };
};
export const fetchSearchedMovies = (mvname) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          query: mvname,
          page: 1,
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      adult: obj.adult,
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.title,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.release_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    console.log(modifiedData);
    dispatch({ type: "SEARCHED_MOVIE", payload: modifiedData });
  };
};
export const fetchMoviesByGenre = (genreID, page) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          page: page,
          with_genres: genreID,
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      adult: obj.adult,
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.title,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.release_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "GENRE_MOVIE", payload: modifiedData });
  };
};
export const fetchTrendingMovies = () => {
  return async (dispatch) => {
    const { data } = await axios.get(trendingMovieUrl, {
      params: {
        api_key: apiKey,
        sort_by: `revenue.desc`,
        language: "en_US",
        page: 1,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      adult: obj.adult,
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.title,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.release_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "TRENDING_MOVIE", payload: modifiedData });
  };
};
export const fetchBoxOfficeMovies = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: apiKey,
          sort_by: `revenue.desc`,
          language: "en_US",
          page: 1,
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      adult: obj.adult,
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.title,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.release_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "BOXOFFICE_MOVIE", payload: modifiedData });
  };
};
export const fetchUpcommingMovies = () => {
  return async (dispatch) => {
    const { data } = await axios.get(upcommingMovieUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      adult: obj.adult,
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.title,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.release_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "UPCOMMING_MOVIE", payload: modifiedData });
  };
};
export const fetchPopularMovies = () => {
  return async (dispatch) => {
    const { data } = await axios.get(popularMoviesUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      adult: obj.adult,
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.title,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.release_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "POPULAR_MOVIE", payload: modifiedData });
  };
};
export const fetchNowPlayingMovies = () => {
  return async (dispatch) => {
    const { data } = await axios.get(nowPlayingMovieUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      adult: obj.adult,
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.title,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.release_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "NOW_PLAYING_MOVIE", payload: modifiedData });
  };
};
export const fetchTopRatedMovies = () => {
  return async (dispatch) => {
    const { data } = await axios.get(topRatedMoviesUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      adult: obj.adult,
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.title,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.release_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "TOP_RATED_MOVIE", payload: modifiedData });
  };
};
export const fetchGenre = () => {
  return async (dispatch) => {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
      },
    });
    dispatch({ type: "GENRE_LIST", payload: data.genres });
  };
};
export const fetchPopularTv = () => {
  return async (dispatch) => {
    const { data } = await axios.get(PopularTvUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
      origin: obj.origin_country[0],
      original_lag: obj.original_language,
    }));
    dispatch({ type: "POPULAR_TV", payload: modifiedData });
  };
};
export const fetchTopRatedTv = () => {
  return async (dispatch) => {
    const { data } = await axios.get(TopRatedTvUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
      origin: obj.origin_country[0],
      original_lag: obj.original_language,
    }));
    dispatch({ type: "TOP_RATED_TV", payload: modifiedData });
  };
};
