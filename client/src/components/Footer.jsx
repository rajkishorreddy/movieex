import React from "react";
import "./scss/footer.scss";
import m2 from "../assets/m2.PNG";
import sprite from "../assets/sprite.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={m2} alt="footer logo" />
        <div className="footer-middle">
          <div className="footer-icon-nav">
            <svg className="footer-icon-nav-item">
              <use xlinkHref={`${sprite}#icon-mail4`}></use>
            </svg>
            <svg className="footer-icon-nav-item">
              <use xlinkHref={`${sprite}#icon-facebook2`}></use>
            </svg>
            <svg className="footer-icon-nav-item">
              <use xlinkHref={`${sprite}#icon-instagram`}></use>
            </svg>
            <svg className="footer-icon-nav-item">
              <use xlinkHref={`${sprite}#icon-telegram`}></use>
            </svg>
            <svg className="footer-icon-nav-item">
              <use xlinkHref={`${sprite}#icon-twitter`}></use>
            </svg>
            <svg className="footer-icon-nav-item">
              <use xlinkHref={`${sprite}#icon-github`}></use>
            </svg>
          </div>
          <div className="footer-creator">CreatedBy</div>
          <div className="footer-creator-name">Raja kishor Reddy</div>
        </div>
        <div className="footer-right">
          <div className="footer-nav">
            <span>about movieex</span>
            <span>contact us</span>
          </div>
          <div className="footer-thanku">Thank you for visiting us!</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
