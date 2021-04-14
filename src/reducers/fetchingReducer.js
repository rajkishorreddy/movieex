export const nowPlayingMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "NOW_PLAYING_MOVIE":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const TrendingMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "TRENDING_MOVIE":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const boxOfficeMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "BOXOFFICE_MOVIE":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const upCommingMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "UPCOMMING_MOVIE":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};

export const TopRatedMovieReducer = (nowplaying = [], action) => {
  if (nowplaying.length !== 0) {
    return [...nowplaying];
  } else {
    switch (action.type) {
      case "TOP_RATED_MOVIE":
        return [...nowplaying, ...action.payload];
      default:
        return nowplaying;
    }
  }
};
export const SearchedMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "SEARCHED_MOVIE":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const MovieRentReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "MOVIE_RENT":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const MovieFlatReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "MOVIE_FLAT":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const MovieBuyReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "MOVIE_BUY":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const SimilarMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "SIMILAR_MOVIE":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const MovieVideoReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "MOVIE_VIDEO":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const RecomendedMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "RECOMENDED_MOVIE":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const GenreMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "GENRE_MOVIE":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const FullMovieReducer = (nowplaying = {}, action) => {
  switch (action.type) {
    case "FULL_MOVIE":
      return { ...action.payload };
    default:
      return { ...nowplaying };
  }
};
export const MovieCastReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "MOVIE_CAST":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const MovieReviewReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "MOVIE_REVIEW":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const MovieCrewReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "MOVIE_CREW":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const MovieExtIdsReducer = (nowplaying = {}, action) => {
  switch (action.type) {
    case "MOVIE_EXTIDS":
      return { ...action.payload };
    default:
      return { ...nowplaying };
  }
};

export const PopularMovieReducer = (nowplaying = [], action) => {
  if (nowplaying.length !== 0) {
    return [...nowplaying];
  } else {
    switch (action.type) {
      case "POPULAR_MOVIE":
        return [...nowplaying, ...action.payload];
      default:
        return nowplaying;
    }
  }
};

export const GenreListReducer = (state = [], action) => {
  if (state.length !== 0) return [...state];
  switch (action.type) {
    case "GENRE_LIST":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const TrendingPeopleReducer = (state = [], action) => {
  switch (action.type) {
    case "TRENDING_PEOPLE":
      return [...action.payload];
    default:
      return [...state];
  }
};
export const PopularPeopleReducer = (state = [], action) => {
  switch (action.type) {
    case "POPULAR_PEOPLE":
      return [...action.payload];
    default:
      return [...state];
  }
};
export const SearchPeopleReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCHED_PEOPLE":
      return [...action.payload];
    default:
      return [...state];
  }
};

export const FullPeopleReducer = (nowplaying = {}, action) => {
  switch (action.type) {
    case "FULL_PEOPLE":
      return { ...action.payload };
    default:
      return { ...nowplaying };
  }
};

export const PeopleMovieReducer = (state = [], action) => {
  switch (action.type) {
    case "PEOPLE_MOVIE":
      return [...action.payload];
    default:
      return [...state];
  }
};
export const PeopleTvReducer = (state = [], action) => {
  switch (action.type) {
    case "PEOPLE_TV":
      return [...action.payload];
    default:
      return [...state];
  }
};

export const PeopleExtIdsReducer = (nowplaying = {}, action) => {
  switch (action.type) {
    case "PEOPLE_EXTIDS":
      return { ...action.payload };
    default:
      return { ...nowplaying };
  }
};

export const PeopleIMGReducer = (state = [], action) => {
  switch (action.type) {
    case "PEOPLE_IMG":
      return [...action.payload];
    default:
      return [...state];
  }
};
export const SearchMultiReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCHED_MULTI":
      return [...action.payload];
    default:
      return [...state];
  }
};
export const LoginReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action.payload };
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return { ...state };
  }
};
