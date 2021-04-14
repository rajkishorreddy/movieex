import React, { useRef, useState, useEffect } from "react";
import sprite from "../../assets/sprite.svg";
import "../scss/listContainer.scss";
const ListContainer = (props) => {
  const carouselbox = useRef(null);
  let scrollAmount = 0;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const sliderScrollRight = () => {
    if (
      scrollAmount <=
      carouselbox.current.scrollWidth - carouselbox.current.clientWidth
    ) {
      carouselbox.current.scrollTo({
        top: 0,
        left: (scrollAmount += windowWidth / 3),
        behavior: "smooth",
      });
    }
  };
  const sliderScrollLeft = () => {
    carouselbox.current.scrollTo({
      top: 0,
      left: (scrollAmount -= windowWidth / 3),
      behavior: "smooth",
    });

    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
  };

  return (
    <React.Fragment>
      <div className="tprated">
        <div className="tprated-title">{props.title}</div>
        <div className="tprated-carousel">
          <div ref={carouselbox} className="tprated-carouselbox">
            {props.list}
          </div>

          <button
            className="tprated-switchLeft tprated-sliderButton"
            onClick={sliderScrollLeft}
          >
            <svg className="tprated-left">
              <use xlinkHref={`${sprite}#icon-circle-left`}></use>
            </svg>
          </button>
          <button
            className="tprated-switchRight tprated-sliderButton"
            onClick={sliderScrollRight}
          >
            <svg className="tprated-right">
              <use xlinkHref={`${sprite}#icon-circle-right`}></use>
            </svg>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ListContainer;
