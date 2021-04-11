export const HboTvReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "HBO_TV":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const HboMaxTvReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "HBOMAX_TV":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const HotstarTvReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "HOTSTAR_TV":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const AmazonTvReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "AMAZON_TV":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const NetflixTvReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "NETFLIX_TV":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const MostVotedTvReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "TV_MOST_VOTED":
      return [...action.payload];
    default:
      return [...nowplaying];
  }
};
export const TopRatedTvReducer = (nowplaying = [], action) => {
  switch (action.type) {
    case "TV_TOPRATED":
      return [...action.payload];
    default:
      return [...nowplaying];
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
