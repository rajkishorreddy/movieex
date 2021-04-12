import axios from "axios";
const url = "https://api.themoviedb.org/3";
const apiKey = "2afbb0d04ed94c81cd8858e0087a74fe";
const nowPlayingMovieUrl = `${url}/movie/now_playing`;
const topRatedMoviesUrl = `${url}/movie/top_rated`;
const popularMoviesUrl = `${url}/movie/popular`;
const upcommingMovieUrl = `${url}/movie/upcoming`;
const genreUrl = `${url}/genre/movie/list`;
const trendingMovieUrl = `${url}/trending/movie/week`;

const trendingPersons = `${url}/trending/person/week`;
// const test = async () => {
//   const { data } = await axios.get(
//     "https://api.themoviedb.org/3/search/tv?api_key=2afbb0d04ed94c81cd8858e0087a74fe&query=sex education"
//   );
//   console.log(data);
// };213
const test = async () => {
  const { data } = await axios.get(`https://api.themoviedb.org/3//tv/66732`, {
    params: {
      api_key: apiKey,
      language: "en_US",
    },
  });
  console.log(data);
};
test();
export const fetchTvShowsByGenre = (genreID, page) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/tv",
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
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "GENRE_TV", payload: modifiedData });
  };
};
export const fetchTrendingTvshows = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          page: 1,
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "TRENDING_TV", payload: modifiedData });
  };
};
export const fetchSearchedTvshows = (mvname) => {
  return async (dispatch) => {
    const { data } = await axios.get("https://api.themoviedb.org/3/search/tv", {
      params: {
        api_key: apiKey,
        language: "en_US",
        query: mvname,
        page: 1,
        include_adults: true,
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "SEARCHED_TV", payload: modifiedData });
  };
};
export const fetchHboTvShows = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          with_networks: "49",
          sort_by: "vote_count.desc",
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "HBO_TV", payload: modifiedData });
  };
};
export const fetchHboMaxTvShows = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          with_networks: "3186",
          sort_by: "vote_count.desc",
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "HBOMAX_TV", payload: modifiedData });
  };
};
export const fetchHotstarTvShows = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          with_networks: "3919",
          sort_by: "vote_count.desc",
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "HOTSTAR_TV", payload: modifiedData });
  };
};
export const fetchAmazonTvShows = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          with_networks: "1024",
          sort_by: "vote_count.desc",
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "AMAZON_TV", payload: modifiedData });
  };
};
export const fetchNetflixTvShows = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          with_networks: "213",
          sort_by: "vote_count.desc",
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "NETFLIX_TV", payload: modifiedData });
  };
};
export const fetchTopRatedtvShows = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          // with_original_language: "US",
        },
      }
    );
    console.log(data);
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "TV_TOPRATED", payload: modifiedData });
  };
};

export const fetchPopularTvShows = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "POPULAR_TV", payload: modifiedData });
  };
};
export const fetchTvShowsMostVoted = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
          sort_by: "vote_count.desc",
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((obj) => ({
      backimg: posterUrl + obj.backdrop_path,
      genre_ids: obj.genre_ids,
      id: obj.id,
      title: obj.name,
      origin_country: obj.origin_country,
      original_language: obj.original_language,
      overview: obj.overview,
      poster: posterUrl + obj.poster_path,
      release: obj.first_air_date,
      rating: obj.vote_average,
      rating_count: obj.vote_count,
    }));
    dispatch({ type: "TV_MOST_VOTED", payload: modifiedData });
  };
};

export const fetchMovieVideos = (ID) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${ID}/videos`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
        },
      }
    );
    const modifiedData = data["results"].map((obj) => ({
      id: obj.id,
      key: obj.key,
      name: obj.name,
      type: obj.type,
    }));
    dispatch({ type: "MOVIE_VIDEO", payload: modifiedData });
  };
};
export const fetchRecomendedMovies = (ID) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${ID}/recommendations`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
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
    dispatch({ type: "RECOMENDED_MOVIE", payload: modifiedData });
  };
};
export const fetchSimilarMovies = (ID) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${ID}/similar`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
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
    dispatch({ type: "SIMILAR_MOVIE", payload: modifiedData });
  };
};
export const fetchMovieRent = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/watch/providers`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    let modData = data.results.US?.rent?.map((el) => ({
      id: el.provider_id,
      logo: posterUrl + el.logo_path,
      name: el.provider_name,
    }));
    if (!modData) modData = [];

    dispatch({ type: "MOVIE_RENT", payload: modData });
  };
};
export const fetchMovieFlatrate = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/watch/providers`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    let modData = data.results.US?.flatrate?.map((el) => ({
      id: el.provider_id,
      logo: posterUrl + el.logo_path,
      name: el.provider_name,
    }));
    if (!modData) modData = [];

    dispatch({ type: "MOVIE_FLAT", payload: modData });
  };
};
export const fetchMovieBuy = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/watch/providers`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    let modData = data.results.US?.buy?.map((el) => ({
      id: el.provider_id,
      logo: posterUrl + el.logo_path,
      name: el.provider_name,
    }));
    if (!modData) modData = [];

    dispatch({ type: "MOVIE_BUY", payload: modData });
  };
};
export const fetchMovieReviews = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    const modData = data.results.map((el) => ({
      id: el.id,
      content: el.content,
      name: el.author,
    }));
    dispatch({ type: "MOVIE_REVIEW", payload: modData });
  };
};
export const fetchMovieCast = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modData = data.cast.slice(0, 40).map((el) => ({
      cast_id: el.cast_id,
      character: el.character,
      id: el.id,
      credit_id: el.credit_id,
      name: el.name,
      profileimg: posterUrl + el.profile_path,
    }));

    dispatch({ type: "MOVIE_CAST", payload: modData });
  };
};
export const fetchMovieCrew = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modData = data.crew.slice(0, 40).map((el) => ({
      department: el.department,
      job: el.job,
      id: el.id,
      name: el.name,
      credit_id: el.credit_id,
      profileimg: posterUrl + el.profile_path,
    }));

    dispatch({ type: "MOVIE_CREW", payload: modData });
  };
};
export const fetchMovieExternalIds = (movie_id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/external_ids`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    dispatch({ type: "MOVIE_EXTIDS", payload: data });
  };
};
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
export const fetchFullMovieDetails = (movie_id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3//movie/${movie_id}`,
      {
        params: {
          api_key: apiKey,
          language: "en_US",
        },
      }
    );

    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modData = {
      adult: data.adult,
      backimg: posterUrl + data.backdrop_path,
      collection: data.belongs_to_collection,
      budget: data.budget,
      genres: data.genres,
      homepage: data.homepage,
      id: data.id,
      overview: data.overview,
      posterimg: data.poster_path,
      productionCompanies: data.production_companies,
      relese: data.release_date,
      revenue: data.revenue,
      runtime: data.runtime,
      status: data.status,
      tagline: data.tagline,
      title: data.title,
      rating: data.vote_average,
      rating_count: data.vote_count,
    };

    dispatch({ type: "FULL_MOVIE", payload: modData });
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
export const fetchTvGenre = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    dispatch({ type: "GENRE_LIST_TV", payload: data.genres });
  };
};
