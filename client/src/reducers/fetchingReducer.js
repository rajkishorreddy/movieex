export const nowPlayingMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "NOW_PLAYING_MOVIE":
      return [...nowplaying, ...action.payload];
    default:
      return nowplaying;
  }
};
export const TopRatedMovieReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "TOP_RATED_MOVIE":
      return [...nowplaying, ...action.payload];
    default:
      return nowplaying;
  }
};

export const GenreListReducer = (state = [], action) => {
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
