export const nowPlayingMovieReducer = (nowplaying = [], action) => {
  if (nowplaying.length !== 0) {
    return [...nowplaying];
  } else {
    switch (action.type) {
      case "NOW_PLAYING_MOVIE":
        return [...nowplaying, ...action.payload];
      default:
        return nowplaying;
    }
  }
};
export const TrendingMovieReducer = (nowplaying = [], action) => {
  if (nowplaying.length !== 0) {
    return [...nowplaying];
  } else {
    switch (action.type) {
      case "TRENDING_MOVIE":
        return [...nowplaying, ...action.payload];
      default:
        return nowplaying;
    }
  }
};
export const boxOfficeMovieReducer = (nowplaying = [], action) => {
  if (nowplaying.length !== 0) {
    return [...nowplaying];
  } else {
    switch (action.type) {
      case "BOXOFFICE_MOVIE":
        return [...nowplaying, ...action.payload];
      default:
        return nowplaying;
    }
  }
};
export const upCommingMovieReducer = (nowplaying = [], action) => {
  if (nowplaying.length !== 0) {
    return [...nowplaying];
  } else {
    switch (action.type) {
      case "UPCOMMING_MOVIE":
        return [...nowplaying, ...action.payload];
      default:
        return nowplaying;
    }
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
      return [...state, ...action.payload];
    default:
      return state;
  }
};
