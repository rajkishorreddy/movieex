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
export const GenreMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "GENRE_MOVIE":
      return [...action.payload];
    default:
      return nowplaying;
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

export const PopularTvReducer = (state = [], action) => {
  switch (action.type) {
    case "POPULAR_TV":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export const TopRatedTvReducer = (state = [], action) => {
  switch (action.type) {
    case "TOP_RATED_TV":
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
