import React from "react";
import logo from "../../assets/logoname.png";
import "../scss/moviehdr.scss";
const MovieHeader = () => {
  return (
    <div className="mvhdr">
      <img src={logo} alt="logo" className="mvhdr-logo" />
      <form className="mvhdr-form">
        <input
          className="mvhdr-input"
          type="text"
          placeholder="search for a movie ..."
        />
      </form>
    </div>
  );
};
export default MovieHeader;
