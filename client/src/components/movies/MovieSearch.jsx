import React from "react";
import { fetchSearchedMovies } from "../../actions";
import { connect } from "react-redux";
class MovieSearch extends React.Component {
  render() {
    return (
      <div>
        lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium veniam consectetur sunt nam adipisci, dolores culpa enim,
        assumenda fugit nobis cum. Quasi consequatur ad corporis mollitia facere
        distinctio exercitationem illo?
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { searchedMovies: state.searchedMovies };
};
export default connect(mapStateToProps, { fetchSearchedMovies })(MovieSearch);
