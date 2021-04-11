import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoname.png";
const TvMain = () => {
  return (
    <div>
      <div className="mvhdr">
        <Link to="/">
          <img src={logo} alt="logo" className="mvhdr-logo" />
        </Link>
        <div className="mvhdr-dispflex">
          <Link to="/tvshows/search" className="mvhdr-searchmv">
            Search for a TVshow
          </Link>
          <Link to="/tvshows/genre" className="mvhdr-genrelink">
            search by genre
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TvMain;
